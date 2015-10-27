import { register } from 'util/i18n';

export const load = {
    Amon(callback, context) {
        require.ensure(['surveys/Amon', 'surveys/Amon/ru'], function onScriptsLoaded(require) {
            register('ru', require('surveys/Amon/ru'), true);
            callback.call(context, require('surveys/Amon'));
        }, 'Amon-runtime-RU');
    },
    Alexithymia(callback, context) {
        require.ensure(['surveys/Alexithymia', 'surveys/Alexithymia/ru'], function onScriptsLoaded(require) {
            register('ru', require('surveys/Alexithymia/ru'), true);
            callback.call(context, require('surveys/Alexithymia'));
        }, 'Alexithymia-runtime-RU');
    },
};

export const surveys = Object.keys(load);

export default {
    getPrevious(survey) {
        let position = surveys.indexOf(survey.constructor.name);
        return load[surveys[position - 1]];
    },
    getNext(survey) {
        let position = surveys.indexOf(survey.constructor.name);
        return load[surveys[position + 1]];
    },
};
