import main from './main';
import translations from './common-ru';
import ru from 'surveys/Emin/ru';
import Emin from 'surveys/Emin';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: Emin,
});
