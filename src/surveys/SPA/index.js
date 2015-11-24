import '../common/button6.css';
import compose from 'lodash/function/compose';
import curry from 'lodash/function/curry';
import forOwn from 'lodash/object/forOwn';
import get from 'lodash/object/get';
import keys from 'lodash/object/keys';
import mapValues from 'lodash/object/mapValues';
import reduce from 'lodash/collection/reduce';
import set from 'lodash/object/set';
import toSet from 'util/toSet';
import { buildMetaData } from '../common/builder';

const SOURCE_SCALES = {
    1: {
         // Адаптивность
        a: [4, 5, 9, 12, 15, 19, 22, 23, 26, 27, 29, 33, 35, 37, 41, 44, 47, 51, 53, 55, 61, 63, 67, 72, 74, 75, 78, 80, 88, 91, 94, 96, 97, 98],
        // Дезадаптивность
        b: [2, 6, 7, 13, 16, 18, 25, 28, 32, 36, 38, 40, 42, 43, 49, 50, 54, 56, 59, 60, 62, 64, 69, 71, 73, 76, 77, 83, 84, 86, 90, 95, 99, 100],
    },
    2: {
        // Лживость -
        a: [34, 45, 48, 81, 89],
        // Лживость +
        b: [8, 82, 92, 101],
    },
    3: {
        // Приятие себя
        a: [33, 35, 55, 67, 72, 74, 75, 80, 88, 94, 96],
        // Неприятие себя
        b: [7, 59, 62, 65, 90, 95, 99],
    },
    4: {
        // Приятие других
        a: [9, 14, 22, 26, 53, 97],
        // Неприятие других
        b: [2, 10, 21, 28, 40, 60, 76],
    },
    5: {
        // Эмоциональный комфорт
        a: [23, 29, 30, 41, 44, 47, 78],
        // Эмоциональный дискомфорт
        b: [6, 42, 43, 49, 50, 83, 85],
    },
    6: {
        // Внутренний контроль
        a: [4, 5, 11, 12, 19, 27, 37, 51, 63, 68, 79, 91, 98, 13],
        // Внешний контроль
        b: [25, 36, 52, 57, 70, 71, 73, 77],
    },
    7: {
        // Доминирование
        a: [58, 61, 66],
        // Ведомость
        b: [16, 32, 38, 69, 84, 87],
    },
    // Эскапизм (уход от проблем)
    8: {
        default: [17, 18, 54, 64, 86],
    },
};

function validate(percentValue) {
    if (percentValue < 0) {
        console.error('percent < 0'); // eslint-disable-line no-console
    } else if (percentValue > 100) {
        console.error('percent > 100'); // eslint-disable-line no-console
    }

    return percentValue;
}

function percent(value) {
    return Math.round(value * 100);
}

function sum(x, y, z, { a, b }) { // eslint-disable-line id-length
    return (x * a) / (y * a + z * b);
}

function pick(key, obj) {
    return obj[key];
}

const SCALE_MAPPERS = {
    '1a': scales => scales[1].a,
    '1b': scales => scales[1].b,
    '2a': scales => scales[2].a,
    '2b': scales => scales[2].b,
    '3a': scales => scales[3].a,
    '3b': scales => scales[3].b,
    '4a': scales => scales[4].a,
    '4b': scales => scales[4].b,
    '5a': scales => scales[5].a,
    '5b': scales => scales[5].b,
    '6a': scales => scales[6].a,
    '6b': scales => scales[6].b,
    '7a': scales => scales[7].a,
    '7b': scales => scales[7].b,
    '8': scales => scales[8].default,
    'A': compose(validate, percent, curry(sum)(1.0, 1.0, 1.0), curry(pick)('1')),
    'S': compose(validate, percent, curry(sum)(1.0, 1.0, 1.0), curry(pick)('3')),
    'L': compose(validate, percent, curry(sum)(1.2, 1.2, 1.0), curry(pick)('4')),
    'E': compose(validate, percent, curry(sum)(1.0, 1.0, 1.0), curry(pick)('5')),
    'I': compose(validate, percent, curry(sum)(1.0, 1.0, 1.4), curry(pick)('6')),
    'D': compose(validate, percent, curry(sum)(2.0, 2.0, 1.0), curry(pick)('7')),
};

const basicReducers = [];

forOwn(SOURCE_SCALES, function forEachScale(subScales, scale) {
    return forOwn(subScales, function forEachSubScale(questions, subScale) {
        const answers = toSet(questions);
        const path = [scale, subScale];

        basicReducers.push(function computeScale(scales, answer, index) {
            const oldValue = get(scales, path, 0);
            const newValue = answers.has(index) ? oldValue + answer : oldValue;
            return set(scales, path, newValue);
        });
    });
});

function rootReducer(scales, value, index) {
    return reduce(basicReducers, function applyScaleReducer(acc, reducer) {
        return reducer(acc, value, index + 1);
    }, scales);
}

const META = buildMetaData({
    className: 'SPA',
    questionsCount: 101,
    answers: [
        { value: 0, cls: 'c c0', text: '0' },
        { value: 2, cls: 'c c1', text: '2' },
        { value: 3, cls: 'c c2', text: '3' },
        { value: 4, cls: 'c c3', text: '4' },
        { value: 5, cls: 'c c4', text: '5' },
        { value: 6, cls: 'c c5', text: '6' },
    ],
    scaleIds: keys(SCALE_MAPPERS),
});

export default class SPA {
    constructor() {
        this.answers = new Array(META.questionsCount);
    }
    get metaData() {
        return META;
    }
    calculate() {
        const tree = reduce(this.answers, rootReducer, {});

        return mapValues(SCALE_MAPPERS, mapper => ({
            value: mapper(tree),
        }));
    }
}
