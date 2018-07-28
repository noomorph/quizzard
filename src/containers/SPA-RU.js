import ru from 'surveys/SPA/ru';
import SPA from 'surveys/SPA';
import main from './main';
import translations from './common-ru';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: SPA,
});
