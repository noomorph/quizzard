function renderAnswer() {
    return `
        <button tabindex="-1"
                data-bind="html: text, attr: { 'class': cls }, disable: $parent.isPreventingClick, click: $parent.fill($data.value)"></button>
    `;
}

function renderQuestion() {
    return `
      <div class="card" data-bind="style: { width: $root.graphics.card.width() + 'px' }, css: { hidden: $index() !== $root.currentQuestion() }">
        <div>
          <span data-bind="html: $data.text"></span>
          <span class="answer" data-bind="visible: $data.answerText(), html: $data.answerText()"></span>
        </div>
      </div>
    `;
}

export default ({ id, links, index, survey: { metaData } }) => `
    <div id="${id}" class="screen">
        <h4 id="breadcrumbs">
          <a href="${links.back}">&#171;</a>
          Вопрос
          <span class="current">${index}</span>&nbsp;из
          <span class="total">${metaData.questions.length}</span>
          <a href="${links.forward}">&#187;</a>
        </h4>
        <div class="frame">
        <div class="ribbon" data-bind="style: { left: graphics.ribbon.left, width: graphics.ribbon.width }">
            ${1} questions.map(renderQuestion).join('')}
        </div>
      </div>
      <div class="controls" data-bind="visible: started()">
          ${2} // answers.map(renderAnswer).join('')
          <div style="clear: both;"></div>
      </div>
    </div>
`;
