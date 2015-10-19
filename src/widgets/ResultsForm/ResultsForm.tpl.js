import { format } from 'util/date';
import { escape } from 'util/xss';

function renderAnswer({ value }, index) {
    if (value === undefined) {
        return '';
    }

    return `
      <tr>
        <td>${index + this}</td>
        <td>${escape(value)}</td>
      </tr>
    `;
}

function renderAnswers(answers, offset) {
    return `
        <table class="bordered" style="float: left">
          <thead> <tr>
            <th>№ п/п</th>
            <th>Ответ</th>
          </tr> </thead>
          <tbody>
          ${answers.map(renderAnswer, offset).join('')}
          </tbody>
        </table>
    `;
}

export default ({ id, user, answers }) => `
    <div id="${id}" class="screen">
      <table class="wide">
        <tr><th class="w8">ФИО</th><td class="under-border">${escape(user.name)}</td></tr>
        <tr><th class="w8">Возраст</th><td class="under-border">${escape(user.age)}</td></tr>
        <tr><th class="w8">Дата</th><td class="under-border">${format(new Date())}</td></tr>
      </table>
      <table class="wide">
        <tr>
          <td class="topped">
            ${renderAnswers(answers[0])}
            ${renderAnswers(answers[1])}
            <div style="clear: both;"></div>
          </td>
          <td></td>
          <td class="topped">
            <table class="bordered">
              <thead>
              <tr>
                <th>Шкала</th>
                <th>Балл</th>
                <th data-bind="visible: $root.t">T</th>
              </tr>
              </thead>
              <tbody data-bind="foreach: scalesArray">
              <tr>
                <td data-bind="attr: { title: scale.description }, text: key"></td>
                <td data-bind="text: scale.score"></td>
                <td data-bind="visible: $root.t, text: scale.tscore"></td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </div>
`;
