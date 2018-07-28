import ru from 'surveys/Factor5/ru';
import Factor5 from 'surveys/Factor5';
import main from './main';
import translations from './common-ru';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: Factor5,
});
