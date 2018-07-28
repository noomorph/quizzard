import i18n from 'util/i18n';
import { linebreak } from 'util/softbreak';

function renderQuestion(metaData, index, answer) {
    const answerHtml = answer !== undefined && metaData.getAnswer(answer, index) || '';

    return `
      <div class="card">
        <div>
          <span>${metaData.questions[index - 1].text}</span>
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

function renderAnswersSection(metaData, index) {
    return metaData.answers.map(answer => Object.assign({}, answer, {
        text: metaData.getAnswer(answer.value, index),
    })).map(renderAnswer).join('');
}

export default ({
    id, links, index, metaData, answers,
}) => `
  <div id="${id}" class="SurveyForm screen">
    <h4 id="breadcrumbs">
      <a href="#${links.back}">&#171;</a>
      ${i18n('QUESTION')}
      <span class="current">${index}</span>&nbsp;${i18n('FROM')}
      <span class="total">${metaData.questions.length}</span>
      ${renderForward(answers[index - 1], links.forward)}
    </h4>
    <div class="frame">
      <div class="ribbon">
        ${renderQuestion(metaData, index, answers[index - 1])}
      </div>
    </div>
    <div class="controls clearfix">
      ${renderAnswersSection(metaData, index)}
    </div>
  </div>
`;
