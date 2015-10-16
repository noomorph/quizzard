import i18n from 'util/i18n';
import { linebreak } from 'util/softbreak';

export default ({ metaData: { name }, currentScreen }) => `
    <h1>${linebreak(name)}</h1>
    <h2>${linebreak(i18n('INSTITUTION'))}</h2>
    ${currentScreen.render()}
`;

