import './SurveyForm.css';
import uniq from 'util/uniq';
import template from './SurveyForm.tpl';

function getBackLink(index) {
    const back = index - 1;
    return back < 1 ? '/register' : `/questions/${back}`;
}

function getForwardLink(index, count) {
    const forward = index + 1;
    return forward <= count ? `/questions/${forward}` : '/results';
}

export default class SurveyForm {
    constructor({
        id, user, survey, index = 1,
    }) {
        this.id = id || uniq('SurveyForm');
        this.user = user;
        this.survey = survey;
        this.index = index;
    }

    get listeners() {
        return {
            button: {
                click: ({ target }) => {
                    const { value } = target.dataset;
                    const { survey, index } = this;
                    this.survey.answers[index - 1] = isFinite(+value) ? +value : value;
                    location.hash = getForwardLink(index, survey.metaData.questionsCount);
                },
            },
        };
    }

    render() {
        const { id, survey, index } = this;
        const count = survey.metaData.questionsCount;

        return template({
            id,
            links: {
                back: getBackLink(index),
                forward: getForwardLink(index, count),
            },
            index,
            metaData: survey.metaData,
            answers: survey.answers,
        });
    }
}
