import ru from 'surveys/Alexithymia/ru';
import Alexithymia from 'surveys/Alexithymia';
import main from './main';
import translations from './common-ru';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: Alexithymia,
});
