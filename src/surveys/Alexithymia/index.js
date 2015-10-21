import '../common/button5.css';
import { buildMetaData } from '../common/builder';

const META = buildMetaData({
    className: 'Alexithymia',
    questionsCount: 26,
    answers: [
        { value: 0, cls: 'a a0' },
        { value: 1, cls: 'a a1' },
        { value: 2, cls: 'a a2' },
        { value: 3, cls: 'a a3' },
        { value: 4, cls: 'a a4' },
    ],
    scaleIds: ['A'],
});

const positives = new Set([2, 3, 4, 7, 8, 10, 14, 16, 17, 18, 19, 20, 22, 23, 25, 26]);
const negatives = new Set([1, 5, 6, 9, 11, 12, 13, 15, 21, 24]);
const minus = (answer, index) => negatives.has(index) ? 5 - answer : NaN;
const plus = (answer, index) => positives.has(index) ? answer + 1 : minus(answer, index);

export default class Alexithymia {
    constructor() {
        this.answers = new Array(META.questionsCount);
    }
    get metaData() {
        return META;
    }
    calculate() {
        let value = this.answers.reduce((scale, answer, index) => scale + plus(answer, index + 1), 0);

        return {
            [META.scales[0].id]: { value },
        };
    }
}
