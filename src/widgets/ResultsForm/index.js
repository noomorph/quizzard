import './ResultsForm.css';
import uniq from 'util/uniq';
import template from './ResultsForm.tpl';

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
        const { id, user } = this;
        const { metaData, answers } = this.survey;
        const results = this.survey.calculate(user);
        const scales = results[0].result ? results : metaData.scales.map(scale => ({
            id: scale.id,
            text: scale.text,
            result: results[scale.id],
        }));

        return template({
            id,
            user,
            metaData,
            answers,
            scales,
        });
    }
}
