import 'surveys/common/button5.css';
import { buildMetaData } from 'surveys/common/builder';
import flatten from 'lodash/flatten';
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import transform from 'lodash/transform';
import createBlankScales from 'surveys/common/blankScales';

const SECONDARY_SCALES = ['I', 'II', 'III', 'IV', 'V'];
const SUB_SCALES = ['.1', '.2', '.3', '.4', '.5'];
const PRIMARY_SCALES = flatten(
    map(SECONDARY_SCALES, scale => map(SUB_SCALES, sub => scale + sub)),
);

const SCALES = SECONDARY_SCALES.concat(PRIMARY_SCALES).map(id => ({ id }));

export const metaData = {
    className: 'Factor5',
    questionsCount: 75,
    answers: [
        { value: -2, cls: 'a a0' },
        { value: -1, cls: 'a a1' },
        { value: 0, cls: 'a a2' },
        { value: 1, cls: 'a a3' },
        { value: 2, cls: 'a a4' },
    ],
    scaleIds: SECONDARY_SCALES.concat(PRIMARY_SCALES),
};

const META = buildMetaData(metaData);

function rootTransformer(scales, answer, index) {
    const secondaryScale = SECONDARY_SCALES[index % 5];
    const scaleGroup = 1 + ((index / 15) | 0);
    const primaryScale = `${secondaryScale}.${scaleGroup}`;
    const incrementValue = 3 - answer;

    scales[primaryScale] += incrementValue;
    scales[secondaryScale] += incrementValue;
}

export default class Factor5 {
    constructor() {
        this.answers = new Array(META.questionsCount);
    }

    get metaData() {
        return META;
    }

    calculate() {
        const raw = transform(this.answers, rootTransformer, createBlankScales(SCALES));
        return mapValues(raw, value => ({ value }));
    }
}
