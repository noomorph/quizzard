import { register } from 'util/i18n';

export const load = {
    Amon(callback, context) {
        require.ensure(['surveys/Amon', 'surveys/Amon/ru'], (require) => {
            register('ru', require('surveys/Amon/ru').default, true);
            callback.call(context, require('surveys/Amon').default);
        }, 'Amon-runtime-RU');
    },
    Alexithymia(callback, context) {
        require.ensure(['surveys/Alexithymia', 'surveys/Alexithymia/ru'], (require) => {
            register('ru', require('surveys/Alexithymia/ru').default, true);
            callback.call(context, require('surveys/Alexithymia').default);
        }, 'Alexithymia-runtime-RU');
    },
    Emin(callback, context) {
        require.ensure(['surveys/Emin', 'surveys/Emin/ru'], (require) => {
            register('ru', require('surveys/Emin/ru').default, true);
            callback.call(context, require('surveys/Emin').default);
        }, 'Emin-runtime-RU');
    },
    SPA(callback, context) {
        require.ensure(['surveys/SPA', 'surveys/SPA/ru'], (require) => {
            register('ru', require('surveys/SPA/ru').default, true);
            callback.call(context, require('surveys/SPA').default);
        }, 'SPA-runtime-RU');
    },
};

export const surveys = Object.keys(load);

export default {
    getPrevious(survey) {
        const position = surveys.indexOf(survey.constructor.name);
        return load[surveys[position - 1]];
    },
    getNext(survey) {
        const position = surveys.indexOf(survey.constructor.name);
        return load[surveys[position + 1]];
    },
};
