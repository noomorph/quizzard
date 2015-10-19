import './ResultsForm.css';
import template from './ResultsForm.tpl';
import uniq from 'util/uniq';

export default class ResultsForm {
    constructor({ id, user, survey }) {
        this.id = id || uniq('ResultsForm');
        this.user = user;
        this.survey = survey;
    }
    render() {
        let { id, user } = this;
        let { metaData, answers } = this.survey;
        let results = this.survey.calculate();
        let Na = answers.length;

        return template({
            id: id,
            user: user,
            answers: [
                answers.slice(0, Math.ceil(Na / 2)),
                answers.slice(Math.ceil(Na / 2), Na),
            ],
            scales: metaData.scales.map(scale => ({
                id: scale.id,
                text: scale.text,
                score: results[scale.id],
            })),
        });
    }
}
