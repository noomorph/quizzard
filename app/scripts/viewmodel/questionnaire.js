/*exported Questionnaire*/
/*global ko, window, DateFormatter, QuestionnaireRibbon, Path */

function Questionnaire(config) {
    var me = this, i;

    if (!config) {
        throw new Error("config is undefined");
    }
    if (!config.test) {
        throw new Error("config.test is undefined");
    }
    if (!config.user) {
        throw new Error("config.user is undefined");
    }

    this.user = config.user;
    ko.utils.extend(this, config.test);

    for (i = 0; i < this.questions.length; i += 1) {
        this.questions[i].id = i + 1;
        this.questions[i].answer = ko.observable(undefined);
        this.questions[i].answerText = ko.observable(undefined);
    }

    this.textsOfAnswers = {};

    for (i = 0; i < this.answers.length; i += 1) {
        var v = this.answers[i].value,
            t = this.answers[i].text,
            p = this.answers[i].print;
        this.textsOfAnswers[v] = p || t || v;
    }

    this.scalesArray = ko.computed(function () {
        var key, arr = [];
        for (key in this.scales) {
            if (this.scales.hasOwnProperty(key)) {
                arr.push({ key: key, scale: this.scales[key] });
            }
        }
        return arr;
    }, this);

    this.currentQuestion = ko.observable(0);
    this.creationDate = new DateFormatter().format(new Date());
    this.started = ko.observable(false);
    this.ended = ko.observable(false);

    this.reset = function () {
        window.location.hash = "/register";
        return false;
    };

    this.submitted = ko.observable(false);

    this.start = function () {
        if (!me.user.valid.all()) {
            this.submitted(true);
            return false;
        }

        // if (window.localStorage) {
        //     window.localStorage.user = ko.utils.stringifyJson(me.user.getData());
        // }

        window.location.hash = "/questions/1";
        return false;
    };

    this.getQuestion = function (index) {
        index = (index === undefined) ? this.currentQuestion() : index;
        if (index < 0 || index >= this.questions.length) {
            return undefined;
        }
        return this.questions[index];
    };

    this.canGoto = function (index) {
        var question = this.getQuestion(index),
            prevQuestion = this.getQuestion(index - 1);
        return this.started() && question && (!prevQuestion || prevQuestion.answer() !== undefined);
    };

    this.canEnd = function () {
        var question = this.getQuestion(),
            nextIndex = this.currentQuestion() + 1;
        return question && question.answer() !== undefined && nextIndex === this.questions.length;
    };

    this.back = function () {
        window.history.go(-1);
    };

    this.forward = function () {
        window.history.go(1);
    };

    this.next = function () {
        var index = me.currentQuestion() + 1;
        if (me.canGoto(index)) {
            window.location.hash = "/questions/" + (index + 1).toString();
            return true;
        }
    };

    this.canNext = ko.computed(function () {
        var index = me.currentQuestion() + 1;
        return me.canGoto(index);
    }, this);

    this.previous = function () {
        var index = me.currentQuestion() - 1;
        if (me.canGoto(index)) {
            window.location.hash = "/questions/" + (index + 1).toString();
            return true;
        }
    };

    this.canPrevious = ko.computed(function () {
        var index = me.currentQuestion() - 1;
        return me.canGoto(index);
    }, this);

    this.fill = function (answer) {
        return function () {
            if (me.started()) {
                var q = me.getQuestion();
                q.answer(answer);
                q.answerText(me.textsOfAnswers[answer].replace(/<br\s?\/?>/, " ").toLowerCase());
                if (!me.end()) {
                    me.next();
                }
            }
        };
    };

    this.end = function () {
        if (me.canEnd()) {
            window.location.hash = "/results";
            return true;
        }
    };

    this.graphics = new QuestionnaireRibbon(this);

    this.reset();

    window.onhashchange = function (e) {
        var url = e.newURL,
            questionRoute,
            index;

        function routeRegister() {
            var i;

            me.started(false);
            for (i = me.questions.length - 1; i >= 0; i--) {
                me.questions[i].answer(undefined);
            }
        }

        function routeResults() {
            if (me.canEnd()) {
                me.calculate();
                me.correct();
                me.ended(true);
            }
        }

        function routeQuestion(index) {
            index = Math.max(0, index - 1);

            me.ended(false);
            if (me.user.valid.all()) {
                me.started(true);
            }

            if (me.canGoto(index)) {
                me.currentQuestion(index);
            }
        }

        questionRoute = url.match(/#\/questions\/(\d+)/);

        if (url === "#/register") {
            routeRegister();
        } else if (url === "#/results") {
            routeResults();
        } else if (questionRoute) {
            index = parseInt(questionRoute[1], 10);
            routeQuestion(index);
        } else {
            window.location.hash = "#/register";
        }
    };
}
