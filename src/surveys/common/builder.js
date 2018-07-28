import range from 'util/range';
import i18nDefault from 'util/i18n';

export function buildMetaData({
    className, questionsCount, answers, scaleIds,
}, i18n) {
    i18n = i18n || i18nDefault;

    function getAnswer(value, index) {
        if (index === undefined) {
            return i18n(`${className}::answers::${value}`);
        }

        return i18n(`${className}::questions::${index}.${value}`);
    }

    return {
        id: className.toLowerCase(),
        className,
        questionsCount,
        get name() {
            return i18n(`${className}::name`);
        },
        get description() {
            return i18n(`${className}::description`);
        },
        getAnswer,
        questions: range(questionsCount).map(index => ({
            get text() {
                return i18n(`${className}::questions::${index + 1}`);
            },
        })),
        answers,
        scales: scaleIds.map(id => ({
            id,
            get text() {
                return i18n(`${className}::scales::${id}`);
            },
        })),
    };
}
