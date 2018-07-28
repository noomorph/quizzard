/* eslint max-len: 0 */

import 'surveys/common/button6.css';
import flowRight from 'lodash/flowRight';
import curry from 'lodash/curry';
import keys from 'lodash/keys';
import get from 'lodash/get';
import set from 'lodash/set';
import mapValues from 'lodash/mapValues';
import reduce from 'lodash/reduce';
import toSet from 'util/toSet';
import { buildMetaData } from 'surveys/common/builder';

const rootReducer = ((() => {
    const reducers = ([
    // Адаптивность
        [[1, 'a'], [4, 5, 9, 12, 15, 19, 22, 23, 26, 27, 29, 33, 35, 37, 41, 44, 47, 51, 53, 55, 61, 63, 67, 72, 74, 75, 78, 80, 88, 91, 94, 96, 97, 98]],
        // Дезадаптивность
        [[1, 'b'], [2, 6, 7, 13, 16, 18, 25, 28, 32, 36, 38, 40, 42, 43, 49, 50, 54, 56, 59, 60, 62, 64, 69, 71, 73, 76, 77, 83, 84, 86, 90, 95, 99, 100]],
        // Лживость -
        [[2, 'a'], [34, 45, 48, 81, 89]],
        // Лживость +
        [[2, 'b'], [8, 82, 92, 101]],
        // Приятие себя
        [[3, 'a'], [33, 35, 55, 67, 72, 74, 75, 80, 88, 94, 96]],
        // Неприятие себя
        [[3, 'b'], [7, 59, 62, 65, 90, 95, 99]],
        // Приятие других
        [[4, 'a'], [9, 14, 22, 26, 53, 97]],
        // Неприятие других
        [[4, 'b'], [2, 10, 21, 28, 40, 60, 76]],
        // Эмоциональный комфорт
        [[5, 'a'], [23, 29, 30, 41, 44, 47, 78]],
        // Эмоциональный дискомфорт
        [[5, 'b'], [6, 42, 43, 49, 50, 83, 85]],
        // Внутренний контроль
        [[6, 'a'], [4, 5, 11, 12, 19, 27, 37, 51, 63, 68, 79, 91, 98, 13]],
        // Внешний контроль
        [[6, 'b'], [25, 36, 52, 57, 70, 71, 73, 77]],
        // Доминирование
        [[7, 'a'], [58, 61, 66]],
        // Ведомость
        [[7, 'b'], [16, 32, 38, 69, 84, 87]],
        // Эскапизм
        [[8, ''], [17, 18, 54, 64, 86]],
    ]).map(([path, questionsArray]) => {
        const questions = toSet(questionsArray);

        return function scaleReducer(scales, answer, index) {
            const oldValue = get(scales, path, 0);
            const newValue = questions.has(index) ? oldValue + answer : oldValue;
            return set(scales, path, newValue);
        };
    });

    return (rootAccumulator, value, index) => reduce(reducers, (accumulator, reducer) => reducer(accumulator, value, index + 1), rootAccumulator);
})());

const scaleMappers = ((() => {
    function percent(value) {
        return Math.round(value * 100);
    }

    function sum(x, y, z, { a, b }) { // eslint-disable-line id-length
        return (x * a) / (y * a + z * b);
    }

    function pick(key, obj) {
        return obj[key];
    }

    return {
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
        8: scales => scales[8][''],
        A: flowRight(percent, curry(sum)(1.0, 1.0, 1.0), curry(pick)('1')),
        S: flowRight(percent, curry(sum)(1.0, 1.0, 1.0), curry(pick)('3')),
        L: flowRight(percent, curry(sum)(1.2, 1.2, 1.0), curry(pick)('4')),
        E: flowRight(percent, curry(sum)(1.0, 1.0, 1.0), curry(pick)('5')),
        I: flowRight(percent, curry(sum)(1.0, 1.0, 1.4), curry(pick)('6')),
        D: flowRight(percent, curry(sum)(2.0, 2.0, 1.0), curry(pick)('7')),
    };
})());

export const metaData = {
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
    scaleIds: keys(scaleMappers).sort(),
};

const META = buildMetaData(metaData);

META.getAnswer = value => String(value);

export default class SPA {
    constructor() {
        this.answers = new Array(META.questionsCount);
    }

    get metaData() {
        return META;
    }

    calculate() {
        const scalesAndSubscales = reduce(this.answers, rootReducer, {});

        return mapValues(scaleMappers, mapper => ({
            value: mapper(scalesAndSubscales),
        }));
    }
}
