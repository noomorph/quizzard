import 'surveys/common/button2.css';
import mapValues from 'lodash/mapValues';
import reduce from 'lodash/reduce';
import toSet from 'util/toSet';
import createBlankScales from 'surveys/common/blankScales';
import { buildMetaData } from 'surveys/common/builder';

function buildScaleReducer(indices, scaleId) {
    const set = toSet(indices);

    return function scaleReducer(scales, value, index) {
        if (value === '+' && set.has(index)) {
            scales[scaleId] = (scales[scaleId] | 0) + 1;
        }

        return scales;
    };
}

const SCALES = [
    { id: 'A1', info: [1, 8, 26, 30, 51, 74, 112, 126, 157, 173, 184, 195, 210] },
    { id: 'A2', info: [2, 4, 6, 63, 92, 97, 104, 118, 132, 145, 168, 175, 180, 203] },
    { id: 'A3', info: [25, 28, 39, 61, 66, 72, 100, 102, 150, 153, 161, 215] },
    { id: 'C1', info: [11, 35, 50, 94, 127, 136, 143, 160, 171, 191, 213, 220] },
    { id: 'C2', info: [32, 47, 54, 59, 91, 109, 128, 163, 178, 179, 188] },
    { id: 'C3', info: [69, 75, 76, 108, 116, 131, 149, 155, 170, 177, 181, 196, 207, 219] },
    { id: 'LO1', info: [23, 36, 58, 89, 90, 95, 99, 137, 138, 140, 176] },
    { id: 'LO2', info: [3, 14, 37, 38, 46, 82, 88, 148, 154, 158, 209] },
    { id: 'LO3', info: [7, 17, 57, 71, 84, 86, 120, 123, 164, 166, 218] },
    { id: 'LI1', info: [5, 13, 21, 29, 42, 98, 107, 130, 147, 167, 192, 201] },
    { id: 'LI2', info: [10, 16, 55, 80, 117, 169, 185, 187, 193, 200, 202, 208] },
    { id: 'LI3', info: [12, 41, 45, 49, 52, 56, 77, 119, 122, 125, 172, 190, 211] },
    { id: 'N1', info: [18, 34, 44, 73, 85, 96, 106, 115, 141, 183, 189, 198] },
    { id: 'N2', info: [19, 31, 53, 68, 87, 113, 162, 174, 199, 204, 206, 214] },
    { id: 'N3', info: [9, 24, 27, 64, 79, 101, 103, 111, 124, 134, 146, 156, 216] },
    { id: 'S1', info: [15, 33, 40, 43, 48, 65, 78, 83, 105, 133, 139, 151, 217] },
    { id: 'S2', info: [20, 22, 62, 67, 70, 93, 110, 129, 142, 159, 186, 194, 197] },
    { id: 'S3', info: [60, 81, 114, 121, 135, 144, 152, 165, 182, 205, 212] },
];

const reducers = SCALES.map(scale => buildScaleReducer(scale.info, scale.id));

export const metaData = {
    className: 'Amon',
    questionsCount: 220,
    answers: [
        { value: '+', cls: 'yes' },
        { value: '-', cls: 'no' },
    ],
    scaleIds: SCALES.map(scale => scale.id),
};

const META = buildMetaData(metaData);

function rootReducer(scales, value, index) {
    return reducers.reduce((acc, reducer) => reducer(acc, value, index + 1), scales);
}

function mapResult(value) {
    return { value };
}

export default class Amon {
    constructor() {
        this.answers = new Array(META.questionsCount);
    }

    get metaData() {
        return META;
    }

    calculate() {
        const result = reduce(this.answers, rootReducer, createBlankScales(SCALES));
        return mapValues(result, mapResult);
    }
}
