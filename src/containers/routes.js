const EMPTY_REGEX = /^#?\/?$/;
const REGISTER_REGEX = /^#?\/register\/?/;
const SURVEY_REGEX = /^#?\/questions\/(\d+)/;
const RESULTS_REGEX = /^#?\/results\/?/;

// import ResultsForm from 'widgets/ResultsForm';

const routeParams = {
    register: () => ({ widget: 'RegisterForm' }),
    survey: index => ({ widget: 'SurveyForm', data: { index } }),
    results: () => ({ widget: 'ResultsForm' }),
};

function register(hash) {
    if (EMPTY_REGEX.test(hash) || REGISTER_REGEX.test(hash)) {
        return routeParams.register();
    }
}

function survey(hash) {
    let [, index] = hash.match(SURVEY_REGEX) || [];
    return index && routeParams.survey(+index);
}

function results(hash) {
    return RESULTS_REGEX.test(hash) && routeParams.results();
}

export function getCurrentRoute(hash = '') {
    return register(hash) || survey(hash) || results(hash) || null;
}

export const DEFAULT_URL = '/';
