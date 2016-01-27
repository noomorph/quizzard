import './ResultsForm.css';
import template from './ResultsForm.tpl';
import uniq from 'util/uniq';

export default class ResultsForm {
    constructor({ id, user, survey }) {
        this.id = id || uniq('ResultsForm');
        this.user = user;
        this.survey = survey;
    }
    get listeners() {
        return {};
    }
    render() {
        let { id, user } = this;
        let { metaData, answers } = this.survey;
        let results = this.survey.calculate();

        return template({
            id,
            user,
            metaData,
            answers,
            scales: metaData.scales.map(scale => ({
                id: scale.id,
                text: scale.text,
                result: results[scale.id],
            })),
        });
    }
}
