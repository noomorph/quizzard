import map from 'lodash/collection/map';
import chunk from 'lodash/array/chunk';
import i18n from 'util/i18n';
import { format } from 'util/date';
import { quoteattr, escape } from 'util/xss';

function renderAnswer(value, index) {
    let { offset, metaData } = this;
    let answer = value !== undefined ? metaData.getAnswer(value) : '';

    return `
      <tr>
        <td>${1 + index + offset}</td>
        <td>${answer.toLowerCase()}</td>
      </tr>
    `;
}

function renderAnswers(answers, extra) {
    return `
        <table class="bordered" style="float: left">
          <thead><tr>
            <th>${i18n('QUESTION_INDEX')}</th>
            <th>${i18n('ANSWER')}</th>
          </tr></thead>
          <tbody>
            ${map(answers, renderAnswer, extra).join('')}
          </tbody>
        </table>
    `;
}

function renderScale({ id, text, result: { value, t } }) {
    let td3 = this.hasT ? `<td>${t}</td>` : '';

    return `
      <tr>
        <td title="${quoteattr(text)}">${escape(id)}</td>
        <td>${value}</td>
        ${td3}
      </tr>
    `;
}

function renderScales(scales) {
    let hasT = scales[0] && scales[0].result.hasOwnProperty('t');

    return `
        <table class="bordered">
          <thead>
          <tr>
            <th>${i18n('SCALE')}</th>
            <th>${i18n('SCORE')}</th>
            ${hasT && `<th>${i18n('T_SCORE')}</th>` || ''}
          </tr>
          </thead>
          <tbody>
            ${map(scales, renderScale, { hasT }).join('')}
          </tbody>
        </table>
    `;
}

export default ({ id, user, answers, metaData, scales }) => `
    <div id="${id}" class="ResultsForm screen">
      <table class="wide">
        <tr><th class="w8">${i18n('FULL_NAME')}</th><td class="under-border">${escape(user.name)}</td></tr>
        <tr><th class="w8">${i18n('AGE')}</th><td class="under-border">${escape(user.age)}</td></tr>
        <tr><th class="w8">${i18n('DATE')}</th><td class="under-border">${format(new Date())}</td></tr>
      </table>
      <table class="wide">
        <tr>
          <td class="topped clearfix">
            ${chunk(answers, Math.min(38, answers.length / 2))
                .reduce(function ({ offset, html }, value) {
                    return {
                        offset: offset + value.length,
                        html: html + renderAnswers(value, { offset, metaData })
                    };
                }, { offset: 0, html: '' }).html}
          </td>
          <td></td>
          <td class="topped">
              ${renderScales(scales)}
          </td>
        </tr>
      </table>
    </div>
`;
