import range from 'util/range';
import i18n from 'util/i18n';

export function buildMetaData({ className, questionsCount, answers, scaleIds }) {
    return {
        id: className.toLowerCase(),
        className: className,
        name: i18n(`${className}::name`),
        description: i18n(`${className}::description`),
        answers: answers.map(({ value, cls = '' }, index) => ({
            value,
            cls,
            text: i18n(`${className}::answers::${index}`),
        })),
        questions: range(questionsCount).map(index => ({
            text: i18n(`${className}::questions::${index + 1}`),
        })),
        scales: scaleIds.map(id => ({
            id,
            text: i18n(`${className}::scales::${id}`),
        })),
    };
}
