import main from './main';
import translations from './common-ru';
import ru from 'surveys/Alexithymia/ru';
import Alexithymia from 'surveys/Alexithymia';

main({
    lang: 'ru',
    translations: [...translations, ru],
    Survey: Alexithymia,
});
