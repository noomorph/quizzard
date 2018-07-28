import ru from 'surveys/Cattell/ru';
import Cattell from 'surveys/Cattell';
import main from './main';
import translations from './common-ru';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: Cattell,
});
