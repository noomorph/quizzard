import i18n from 'util/i18n';
import { linebreak } from 'util/softbreak';

function iif(data, str) {
    if (!data) return '';
    return str;
}

export default ({ surveyLinks: { prev, next }, metaData: { name }, currentScreen }) => `
    <h1>
        ${iif(prev && false, '<a class="prev-survey" href="#">&#171;</a>')}
        ${linebreak(name)}
        ${iif(next && false, '<a class="next-survey" href="#">&#187;</a>')}
    </h1>
    <h2>${linebreak(i18n('INSTITUTION'))}</h2>
    ${currentScreen ? currentScreen.render() : ''}
`;
