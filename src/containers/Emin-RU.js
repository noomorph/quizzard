import ru from 'surveys/Emin/ru';
import Emin from 'surveys/Emin';
import main from './main';
import translations from './common-ru';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: Emin,
});
