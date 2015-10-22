import './QuizzardApp.css';
import last from 'lodash/array/last';
import assign from 'lodash/object/assign';
import template from './QuizzardApp.tpl';
import uniq from 'util/uniq';
import { getWidgetClass, forceRender } from 'util/hotMount';
import { getCurrentRoute, DEFAULT_URL } from 'containers/routes';

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
    }
    createWidget() {
        let { route: { widget, data } } = this;
        let Widget = getWidgetClass(widget);
        return new Widget(
            assign({}, this, data, { id: this.id + '_' + widget })
        );
    }
    get listeners() {
        return {
            ...this.createWidget().listeners,
            'window': {
                hashchange: (ev) => {
                    let newRoute = getCurrentRoute(location.hash);
                    if (newRoute) {
                        if (isRouteValid(newRoute, this)) {
                            this.route = newRoute;
                            forceRender(this);
                        } else {
                            ev.preventDefault();
                        }
                    } else {
                        location.hash = DEFAULT_URL;
                    }
                },
            },
        };
    }
    render() {
        return template({
            metaData: this.survey.metaData,
            currentScreen: this.createWidget(),
        });
    }
}
