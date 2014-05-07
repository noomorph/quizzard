/*exported Questionnaire*/
/*global ko, window, DateFormatter, QuestionnaireRibbon */

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
    this.isPreventingClick = ko.observable(false);

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

    this.canNext = ko.computed(function () {
        var index = me.currentQuestion() + 1;
        return me.canGoto(index);
    }, this);

    this.canPrevious = ko.computed(function () {
        var index = me.currentQuestion() - 1;
        return me.canGoto(index);
    }, this);

    this.backLink = ko.computed(function () {
        var index = this.currentQuestion() + 1;

        if (this.canPrevious()) {
            return "#/questions/" + (index - 1);
        }

        return "#/register";
    }, this);

    this.forwardLink = ko.computed(function () {
        if (me.canEnd()) {
            return "#/results";
        }

        var index = this.currentQuestion() + 1;

        return "#/questions/" + (index + 1);
    }, this);

    this.next = function () {
        var index = me.currentQuestion() + 1;

        window.location.hash = "/questions/" + (index + 1);
    };

    this.fill = function (answer) {
        return function () {
            if (me.started()) {
                var q = me.getQuestion();
                q.answer(answer);
                q.answerText(me.textsOfAnswers[answer].replace(/<br\s?\/?>/, " ").toLowerCase());

                if (me.canEnd()) {
                    window.location.hash = "/results";
                } else {
                    me.next();
                }
            }
        };
    };

    this.graphics = new QuestionnaireRibbon(this);

    this.reset();

    window.onhashchange = function (e) {
        var url = e.newURL,
            hash = window.location.hash,
            REGISTER_REGEX = /#\/register\/?$/,
            QUESTION_REGEX = /#\/questions\/(\d+)\/?$/,
            RESULTS_REGEX  = /#\/results\/?$/,
            route;

        function routeRegister() {
            me.ended(false);
            me.started(false);
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

        if (!hash || REGISTER_REGEX.test(url)) {
            routeRegister();
        } else if (RESULTS_REGEX.test(url)) {
            routeResults();
        } else if (QUESTION_REGEX.test(url)) {
            route = url.match(QUESTION_REGEX);
            routeQuestion(parseInt(route[1], 10));
        } else {
            me.reset();
        }
    };
}
