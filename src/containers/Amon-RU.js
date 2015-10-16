import main from './main';

main({
    lang: 'ru',
    translations: [
        require('widgets/QuizzardApp/ru'),
        require('widgets/RegisterForm/ru'),
        require('surveys/Amon/ru'),
    ],
    Survey: require('surveys/Amon'),
});
