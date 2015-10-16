import main from './main';

main({
    lang: 'ru',
    translations: [
        require('widgets/QuizzardApp/ru'),
        require('widgets/RegisterForm/ru'),
        require('surveys/Alexithymia/ru'),
    ],
    Survey: require('surveys/Alexithymia'),
});
