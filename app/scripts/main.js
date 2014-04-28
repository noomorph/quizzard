/*global User, Questionnaire, DomHelper, ko, window */

window.onload = function () {
    var user = new User(),
        test;

    DomHelper.setTitle(this.defaultTest.name);
    DomHelper.initIcons('images/ico/' + this.defaultTest.id);

    this.test = new Questionnaire({ test: this.defaultTest, user: user });
    test = this.test;

    function resizeCards() {
        var currentWidth = document.getElementById("questions").offsetWidth;
        test.graphics.card.width(currentWidth);
    }

    window.onresize = resizeCards;

    test.started.subscribe(function (started) {
        var breadcrumbs = document.getElementById("breadcrumbs");
        return started && setTimeout(function () {
            resizeCards();

            if (breadcrumbs &&
                    typeof breadcrumbs.scrollIntoView === 'function' &&
                    window.innerHeight < 450) {
                breadcrumbs.scrollIntoView();
            }
        }, 150);
    });

    test.currentQuestion.subscribe(function () {
        var selector = document.querySelectorAll("#questions .controls button");
        selector = Array.prototype.slice.call(selector);

        selector.forEach(function (button) {
            button.setAttribute("disabled", "disabled");
        });

        setTimeout(function () {
            selector.forEach(function (button) {
                button.removeAttribute("disabled");
            });
        }, 500);
    });

    ko.applyBindings(test);

    document.body.className = document.body.className.replace("loading", "");
};
