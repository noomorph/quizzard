import i18n from 'util/i18n';
import { linebreak } from 'util/softbreak';

function renderQuestion({ text }, metaData, answer) {
    let answerHtml = answer !== undefined && metaData.getAnswer(answer) || '';

    return `
      <div class="card">
        <div>
          <span>${text}</span>
          <span class="answer">${answerHtml.toLowerCase()}</span>
        </div>
      </div>
    `;
}

function renderAnswer({ text, cls, value }) {
    return `
      <button tabindex="-1" class="${cls}" data-value="${value}">
        ${linebreak(text)}
      </button>
    `;
}

function renderForward(answer, link) {
    if (answer !== undefined) {
        return `<a href="#${link}">&#187;</a>`;
    }

    return '';
}

export default ({ id, count, links, index, metaData, questions, answers }) => `
  <div id="${id}" class="SurveyForm screen">
    <h4 id="breadcrumbs">
      <a href="#${links.back}">&#171;</a>
      ${i18n('QUESTION')}
      <span class="current">${index}</span>&nbsp;${i18n('FROM')}
      <span class="total">${questions.length}</span>
      ${renderForward(answers[index - 1], links.forward)}
    </h4>
    <div class="frame">
      <div class="ribbon">
        ${renderQuestion(questions[index - 1], metaData, answers[index - 1])}
      </div>
    </div>
    <div class="controls clearfix">
      ${metaData.answers.map(renderAnswer).join('')}
    </div>
  </div>
`;
