import './SurveyForm.css';
import template from './SurveyForm.tpl';
import uniq from 'util/uniq';

function getBackLink(index) {
    let back = index - 1;
    return back < 1 ? `/register` : `/questions/${back}`;
}

function getForwardLink(index, count) {
    let forward = index + 1;
    return forward <= count ? `/questions/${forward}` : `/results`;
}

export default class SurveyForm {
    constructor({ id, user, survey, index = 1 }) {
        this.id = id || uniq('SurveyForm');
        this.user = user;
        this.survey = survey;
        this.index = index;
    }
    get listeners() {
        return {
            button: {
                'click': ({ target }) => {
                    let { value } = target.dataset;
                    let { survey, index } = this;
                    this.survey.answers[index - 1] = isFinite(+value) ? +value : value;
                    location.hash = getForwardLink(index, survey.metaData.questionsCount);
                },
            },
        };
    }
    render() {
        let { id, survey, index } = this;
        let count = survey.metaData.questionsCount;

        return template({
            id,
            links: {
                back: getBackLink(index),
                forward: getForwardLink(index, count),
            },
            index,
            metaData: survey.metaData,
            questions: survey.metaData.questions,
            answers: survey.answers,
        });
    }
}
