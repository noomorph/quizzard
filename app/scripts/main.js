/*global User, Questionnaire, DomHelper, ko, $, window */

window.onload = function () {
    var user = new User(),
        test;

    DomHelper.setTitle(this.defaultTest.name);
    DomHelper.initIcons('img/ico/' + this.defaultTest.id);

    this.test = new Questionnaire({ test: this.defaultTest, user: user });
    test = this.test;

    test.resizeCards = function () {
        var currentWidth = $("#questions").width();
        test.graphics.card.width(currentWidth);
    };

    $(this).resize(test.resizeCards);

    test.started.subscribe(function (started) {
        var breadcrumbs = document.getElementById("breadcrumbs");
        return started && setTimeout(function () {
            test.resizeCards();
            if (breadcrumbs &&
                    typeof breadcrumbs.scrollIntoView === 'function' &&
                    window.innerHeight < 450) {
                breadcrumbs.scrollIntoView();
            }
        }, 150);
    });

    test.currentQuestion.subscribe(function () {
        var selector = $("#questions .controls button");
        selector.attr("disabled", "disabled");
        setTimeout(function () {
            selector.attr("disabled", null);
        }, 500);
    });

    ko.applyBindings(test);
    $("body").removeClass("loading");
};
