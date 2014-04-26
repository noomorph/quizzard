/*global ko*/
/*exported QuestionnaireRibbon*/

function QuestionnaireRibbon(viewModel) {
    this.card = { width: ko.observable(640) };
    this.ribbon = {
        left: ko.computed(function () {
            return (-1 * this.card.width() * viewModel.currentQuestion()) + 'px';
        }, this),
        width: ko.computed(function () {
            return (this.card.width() * viewModel.questions.length) + 'px';
        }, this)
    };
}
