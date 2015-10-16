import './QuizzardApp.css';
import mapKeys from 'lodash/object/mapKeys';
import template from './QuizzardApp.tpl';
import uniq from 'util/uniq';
import RegisterForm from 'widgets/RegisterForm';
// import SurveyForm from 'widgets/SurveyForm';
// import ResultsForm from 'widgets/ResultsForm';

function prefixListener(value, key) {
    return `#${this} ${key}`.trim();
}

function prefixListeners(widget) {
    return mapKeys(widget.listeners, prefixListener, widget.id);
}

export default class QuizzardApp {
    constructor({ user, survey }) {
        this.id = uniq('quizzard');
        this.user = user;
        this.survey = survey;

        this.registerForm = new RegisterForm({
            user,
            survey,
            onFormSubmit: this.onFormSubmit,
        });
        // this.surveyForm = new SurveyForm({ user, survey });
        // this.resultsForm = new ResultsForm({ user, survey });
    }
    onFormSubmit() {
    }
    get listeners() {
        return {
            ...prefixListeners(this.registerForm),
        };
    }
    render() {
        let { survey } = this;
        return template({
            metaData: survey.metaData,
            currentScreen: this.registerForm,
        });
    }
}
