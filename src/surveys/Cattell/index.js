/* eslint arrow-body-style: 0 */

import core from 'multi-test-core';
import 'surveys/common/button3.css';
import { buildMetaData } from 'surveys/common/builder';

const META = buildMetaData({
    className: 'Cattell',
    questionsCount: 187,
    answers: [
        { value: 'A', cls: 'b b0' },
        { value: 'B', cls: 'b b1' },
        { value: 'C', cls: 'b b2' },
    ],
    scaleIds: [
        'A', 'B', 'C', 'E', 'F', 'G',
        'H', 'I', 'L', 'M', 'N', 'O',
        'Q1', 'Q2', 'Q3', 'Q4', 'TA',
        'TB', 'TC', 'TE', 'TF', 'TG',
        'TH', 'TI', 'TL', 'TM', 'TN',
        'TO', 'TQ1', 'TQ2', 'TQ3', 'TQ4',
    ],
});


export default class Cattell {
    constructor() {
        this.answers = new Array(META.questionsCount);
    }

    get metaData() {
        return META;
    }

    calculate({ age, gender }) {
        const _gender = gender === 0 ? 'M' : 'F';
        const scales = core.cattell(this.answers.concat([_gender, +age]));

        return Object.keys(scales).filter(x => x !== 'raw')
            .map(id => ({
                id,
                result: {
                    value: scales.raw[id],
                    t: scales[id],
                },
            }));
    }
}
