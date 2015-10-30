import main from './main';
import translations from './common-ru';

main({
    lang: 'ru',
    translations: translations.concat([
        require('surveys/Emin/ru'),
    ]),
    Survey: require('surveys/Emin'),
});
