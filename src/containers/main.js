import { register, change } from 'util/i18n';
import * as widgets from '../widgets';
import hotMount from 'util/hotMount';
import User from 'surveys/common/User';

export default function main({ lang, translations, Survey }) {
    translations.map(dic => register(lang, dic));
    change(lang);

    hotMount(document.body, undefined, widgets, {
        user: new User(),
        survey: new Survey(),
    });

    if (module.hot) {
        let oldWidgets = widgets;

        module.hot.accept('../widgets', () => {
            let newWidgets = require('../widgets');
            hotMount(document.body, oldWidgets, newWidgets);
            oldWidgets = newWidgets;
        });
    }
}
