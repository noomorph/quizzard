import main from './main';
import translations from './common-ru';

main({
    lang: 'ru',
    translations: translations.concat([
        require('surveys/Amon/ru'),
    ]),
    Survey: require('surveys/Amon'),
});
