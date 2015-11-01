import './QuizzardApp.css';
import assign from 'lodash/object/assign';
import template from './QuizzardApp.tpl';
import uniq from 'util/uniq';
import { getWidgetClass, forceRender } from 'util/hotMount';
import { getCurrentRoute, DEFAULT_URL } from 'containers/routes';
import loader from 'containers/loader';

function isRouteValid(route, { user, survey }) {
    if (!route || !route.is) { return false; }

    if (route.is.register) {
        return true;
    }

    let questionsCount = survey.metaData.questions.length;

    if (route.is.survey) {
        let { index } = route.data;
        return user.valid && index > 0 && index <= questionsCount && (index === 1 || survey.answers[index - 2] !== undefined);
    }

    if (route.is.results) {
        return user.valid && survey.answers[questionsCount - 1] !== undefined;
    }

    return false;
}

export default class QuizzardApp {
    constructor({ user, survey }) {
        this.id = uniq('quizzard');
        this.user = user;
        this.survey = survey;
        this.route = getCurrentRoute(location.hash);
        this.onHashChange = this.onHashChange.bind(this);

        if (!isRouteValid(this.route, this)) {
            this.route = getCurrentRoute(DEFAULT_URL);
            location.hash = DEFAULT_URL;
        }
    }
    createWidget() {
        let { route: { widget, data } } = this;
        let Widget = getWidgetClass(widget);
        return new Widget(
            assign({}, this, data, { id: this.id + '_' + widget })
        );
    }
    loadSurvey(Survey) {
        this.survey = new Survey();
        this.onHashChange({ oldURL: location.hash });
    }
    onHashChange({ oldURL }) {
        let newRoute = getCurrentRoute(location.hash);
        if (newRoute) {
            if (isRouteValid(newRoute, this)) {
                this.route = newRoute;
                forceRender(this);
            } else {
                let [, oldHash] = oldURL.split('#');
                let oldRoute = getCurrentRoute(oldHash);

                if (isRouteValid(oldRoute, this)) {
                    location.href = oldURL;
                } else {
                    location.hash = DEFAULT_URL;
                }
            }
        } else {
            location.hash = DEFAULT_URL;
        }
    }
    get listeners() {
        return {
            ...this.createWidget().listeners,
            '.prev-survey': {
                click: (ev) => {
                    ev.preventDefault();
                    let fn = loader.getPrevious(this.survey);
                    if (fn) { fn(this.loadSurvey, this); }
                },
            },
            '.next-survey': {
                click: (ev) => {
                    ev.preventDefault();
                    let fn = loader.getNext(this.survey);
                    if (fn) { fn(this.loadSurvey, this); }
                },
            },
            'window': {
                hashchange: this.onHashChange,
            },
        };
    }
    render() {
        let surveyLinks = {
            prev: !!(loader.getPrevious(this.survey)),
            next: !!(loader.getNext(this.survey)),
        };

        return template({
            surveyLinks,
            metaData: this.survey.metaData,
            currentScreen: this.createWidget(),
        });
    }
}
