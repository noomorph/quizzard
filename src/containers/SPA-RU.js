import main from './main';
import translations from './common-ru';
import ru from 'surveys/SPA/ru';
import SPA from 'surveys/SPA';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: SPA,
});
