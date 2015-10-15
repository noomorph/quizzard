import ko from 'knockout';
import * as DomHelper from './util/dom';
import User from './viewmodel/user';
import Questionnaire from './viewmodel/questionnaire';

window.onload = function onLoad() {
    let user = new User();

    DomHelper.setTitle(this.defaultTest.name);
    DomHelper.initIcons('images/ico/' + this.defaultTest.id);

    let test = this.test = new Questionnaire({ test: this.defaultTest, user: user });

    function resizeCards() {
        let currentWidth = document.getElementById('questions').offsetWidth;
        test.graphics.card.width(currentWidth);
    }

    window.onresize = resizeCards;

    this.test.started.subscribe(function onStartedChanged(started) {
        let breadcrumbs = document.getElementById('breadcrumbs');

        return started && setTimeout(function doSomeVisualStuff() {
            resizeCards();

            if (breadcrumbs &&
                    typeof breadcrumbs.scrollIntoView === 'function' &&
                    window.innerHeight < 450) {
                breadcrumbs.scrollIntoView();
            }
        }, 150);
    });

    this.test.currentQuestion.subscribe(function onCurrentQuestionChanged() {
        test.isPreventingClick(true);

        setTimeout(function setPreventingClickToFalse() {
            test.isPreventingClick(false);
        }, 500);
    });

    ko.applyBindings(this.test);

    document.body.className = document.body.className.replace('loading', '');
};
