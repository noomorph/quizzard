<div class="screen" id="questions" data-bind="visible: started() &amp;&amp; !ended()">
    <h4 id="breadcrumbs">
      <a data-bind="attr: { href: backLink }">&#171;</a>
      Вопрос
      <span class="current" data-bind="text: currentQuestion() + 1"></span>&nbsp;из
      <span class="total" data-bind="text: questions.length"></span>

      <a data-bind="visible: canNext() || canEnd(), attr: { href: forwardLink }">&#187;</a>
    </h4>
    <div class="frame">
    <div class="ribbon" data-bind="style: { left: graphics.ribbon.left, width: graphics.ribbon.width }">
      <!-- ko foreach: questions -->
      <div class="card" data-bind="style: { width: $root.graphics.card.width() + 'px' }, css: { hidden: $index() !== $root.currentQuestion() }">
        <div>
          <span data-bind="html: $data.text"></span>
          <span class="answer" data-bind="visible: $data.answerText(), html: $data.answerText()"></span>
        </div>
      </div>
      <!-- /ko -->
    </div>
  </div>
  <div class="controls" data-bind="visible: started()">
    <!-- ko foreach: answers -->
    <button tabindex="-1"
            data-bind="html: text, attr: { 'class': cls }, disable: $parent.isPreventingClick, click: $parent.fill($data.value)"></button>
    <!-- /ko -->
      <div style="clear: both;"></div>
  </div>
</div>
