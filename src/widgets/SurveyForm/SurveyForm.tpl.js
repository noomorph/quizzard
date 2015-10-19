import { linebreak } from 'util/softbreak';

function renderQuestion({ text }, metaData, answer) {
    let answerHtml = answer !== undefined ? metaData.getAnswer(answer) : '';

    return `
      <div class="card">
        <div>
          <span>${text}</span>
          <span class="answer">${answerHtml}</span>
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

export default ({ id, count, links, index, metaData, questions, answers }) => `
  <div id="${id}" class="SurveyForm screen">
    <h4 id="breadcrumbs">
      <a href="#${links.back}">&#171;</a>
      Вопрос
      <span class="current">${index}</span>&nbsp;из
      <span class="total">${questions.length}</span>
      <a href="#${links.forward}">&#187;</a>
    </h4>
    <div class="frame">
      <div class="ribbon">
        ${renderQuestion(questions[index - 1], metaData, answers[index - 1])}
      </div>
    </div>
    <div class="controls">
      ${metaData.answers.map(renderAnswer).join('')}
    </div>
  </div>
`;
