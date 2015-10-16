import './SurveyForm.css';
import template from './SurveyForm.tpl';
import uniq from 'util/uniq';

export default class SurveyForm {
    constructor({} = {}) {
        this.id = uniq('SurveyForm');
    }
    static get listeners() {
        return { };
    }
    render() {
        return template({
            questions: [],
            answers: [],
        });
    }
}
