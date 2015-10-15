import ko from 'knockout';

function getLeft() {
    return (-1 * this.card.width() * this.viewModel.currentQuestion()) + 'px';
}

function getWidth() {
    return (this.card.width() * this.viewModel.questions.length) + 'px';
}
export default class QuestionnaireRibbon {
    constructor(viewModel) {
        this.viewModel = viewModel;
        this.card = { width: ko.observable(640) };
        this.ribbon = {
            left: ko.computed(getLeft, this),
            width: ko.computed(getWidth, this),
        };
    }
}
