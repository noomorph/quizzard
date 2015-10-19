import './QuizzardApp.css';
import assign from 'lodash/object/assign';
import template from './QuizzardApp.tpl';
import uniq from 'util/uniq';
import { getWidgetClass, forceRender } from 'util/hotMount';
import { getCurrentRoute, DEFAULT_URL } from 'containers/routes';

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
                hashchange: () => {
                    let newRoute = getCurrentRoute(location.hash);
                    if (newRoute) {
                        this.route = newRoute;
                        forceRender(this);
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
