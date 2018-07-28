import { register, change } from 'util/i18n';
import hotMount from 'util/hotMount';
import User from 'surveys/common/User';
import widgets from '../widgets';

export default function main({ lang, translations, Survey }) {
    translations.forEach(dic => register(lang, dic));
    change(lang);

    hotMount(document.body, undefined, widgets, {
        user: new User(),
        survey: new Survey(),
    });

    let oldWidgets = widgets;

    if (module.hot) {
        module.hot.accept('../widgets', () => {
            const newWidgets = require('../widgets').default;
            hotMount(document.body, oldWidgets, newWidgets);
            oldWidgets = newWidgets;
        });
    }
}
