import 'surveys/common/button4.css';
import createBlankScales from 'surveys/common/blankScales';
import mapValues from 'lodash/mapValues';
import toSet from 'util/toSet';
import { buildMetaData } from 'surveys/common/builder';

const SCALES = [
    { id: 'МП', plus: [1, 3, 11, 13, 20, 27, 29, 32, 34], minus: [38, 42, 46] },
    { id: 'МУ', plus: [9, 15, 17, 24, 36], minus: [2, 5, 30, 40, 44] },
    { id: 'ВП', plus: [7, 14, 26], minus: [8, 18, 22, 31, 35, 41, 45] },
    { id: 'ВУ', plus: [4, 25, 28, 37], minus: [12, 33, 43] },
    { id: 'ВЭ', plus: [19, 21, 23], minus: [6, 10, 16, 39] },
];

const reducers = SCALES.map(({ id, plus, minus }) => {
    const setP = toSet(plus);
    const setM = toSet(minus);

    return function scaleReducer(scales, value, index) {
        if (!scales.hasOwnProperty(id)) {
            scales[id] = 0;
        }

        if (setP.has(index)) {
            scales[id] += value;
        }

        if (setM.has(index)) {
            scales[id] += 3 - value;
        }

        return scales;
    };
});

const COMPUTED_SCALES = [
    { id: 'МЭИ', sum: ['МП', 'МУ'] },
    { id: 'ВЭИ', sum: ['ВП', 'ВУ', 'ВЭ'] },
    { id: 'ПЭ', sum: ['МП', 'ВП'] },
    { id: 'УЭ', sum: ['МУ', 'ВУ', 'ВЭ'] },
    { id: 'ОУ', sum: ['МП', 'МУ', 'ВП', 'ВУ', 'ВЭ'] },
];

function computedReducer(scales, { id, sum }) {
    scales[id] = sum.reduce((acc, scale) => acc + scales[scale], 0);
    return scales;
}

function rootReducer(scales, value, index) {
    return reducers.reduce((acc, reducer) => reducer(acc, value, index + 1), scales);
}

export const metaData = {
    className: 'Emin',
    questionsCount: 46,
    answers: [
        { value: '0', cls: 'b b0' },
        { value: '1', cls: 'b b1' },
        { value: '2', cls: 'b b2' },
        { value: '3', cls: 'b b3' },
    ],
    scaleIds: []
        .concat(SCALES.map(scale => scale.id))
        .concat(COMPUTED_SCALES.map(scale => scale.id)),
};

const META = buildMetaData(metaData);

export default class Emin {
    constructor() {
        this.answers = new Array(META.questionsCount);
    }

    get metaData() {
        return META;
    }

    calculate() {
        const basicScales = this.answers.reduce(rootReducer, createBlankScales(SCALES));
        const unwrappedScales = COMPUTED_SCALES.reduce(computedReducer, basicScales);
        return mapValues(unwrappedScales, value => ({ value }));
    }
}
