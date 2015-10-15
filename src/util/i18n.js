import buildTranslationFunction from 'translate.js';

let dictionary = {
    'INFO_ABOUT_YOU': `Информация о вас`,
    'WE_NEED_YOUR_DATA': `
        Для того, чтобы принять участие в исследовании,
        от вас потребуются следующие данные: `,
    'FULL_NAME': `ФИО`,
    'FULL_NAME_PLACEHOLDER': `Иванов И. И.`,
    'AGE': `Возраст`,
    'GENDER': `Пол`,
    'GENDER_NAME': {
        0: 'мужской',
        1: 'женский',
    },
    'TERMS_OF_USE': `
        Заполняя эти поля,
        вы соглашаетесь с условиями использования
        ваших данных`,
    'DISCLAIMER': `
        Ваши фамилия, возраст и инициалы будут
        использоваться исключительно в научных целях
        для общей статистической обработки и не будут
        переданы третьим лицам, а также не будут
        использоваться для вашей идентификации и/или
        установления контакта с вами.`,
    'INSTRUCTION': `ИНСТРУКЦИЯ`,
    'START_SURVEY': `Пройти опросник`,
};

export default buildTranslationFunction(dictionary, { debug: true });
