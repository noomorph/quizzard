import main from './main';
import translations from './common-ru';
import ru from 'surveys/Amon/ru';
import Amon from 'surveys/Amon';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: Amon,
});
