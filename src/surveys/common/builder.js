import range from 'util/range';
import i18n from 'util/i18n';

export function buildMetaData({ className, questionsCount, answers, scaleIds }) {
    return {
        id: className.toLowerCase(),
        className: className,
        get name() {
            return i18n(`${className}::name`);
        },
        get description() {
            return i18n(`${className}::description`);
        },
        answers: answers.map(({ value, cls = '' }, index) => ({
            value,
            cls,
            get text() {
                return i18n(`${className}::answers::${index}`);
            },
        })),
        questions: range(questionsCount).map(index => ({
            get text() {
                return i18n(`${className}::questions::${index + 1}`);
            },
        })),
        scales: scaleIds.map(id => ({
            id,
            get text() {
                return i18n(`${className}::scales::${id}`);
            },
        })),
    };
}
