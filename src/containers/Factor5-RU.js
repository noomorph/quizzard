import main from './main';
import translations from './common-ru';
import ru from 'surveys/Factor5/ru';
import Factor5 from 'surveys/Factor5';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: Factor5,
});
