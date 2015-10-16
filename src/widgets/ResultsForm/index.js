import './ResultsForm.css';
import template from './ResultsForm.tpl';
import uniq from 'util/uniq';

export default class ResultsForm {
    constructor({} = {}) {
        this.id = uniq('ResultsForm');
    }
    static get listeners() {
        return { };
    }
    render() {
        return template({
        });
    }
}
