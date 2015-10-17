import './SurveyForm.css';
import template from './SurveyForm.tpl';
import uniq from 'util/uniq';

function onHashChange() {
    let [, index] = location.hash.match(/questions\/(\d+)$/) || [];
    this.index = +(index || 1);
}

export default class SurveyForm {
    constructor({ user, survey }) {
        this.id = uniq('SurveyForm');
        this.user = user;
        this.survey = survey;
        onHashChange.call(this);
    }
    static get listeners() {
        return { };
    }
    render() {
        let { survey, index } = this;
        let count = survey.metaData.questions.length;

        let back = index - 1;
        back = back < 1 ? `#/register` : `#/questions/${back}`;

        let forward = index + 1;
        forward = forward <= count ? `#/questions/${forward}` : `#/results`;

        return template({
            id: this.id,
            links: { back, forward },
            index: this.index,
            survey: this.survey,
            questions: [],
            answers: [],
        });
    }
}
