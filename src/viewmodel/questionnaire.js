/* eslint-disable func-names */

// import ko from 'knockout';
import QuestionnaireRibbon from './questionnaireRibbon';
import { format } from '../util/date';

const REGISTER_REGEX = /#\/register\/?$/;
const QUESTION_REGEX = /#\/questions\/(\d+)\/?$/;
const RESULTS_REGEX = /#\/results\/?$/;

export default class Questionnaire {
    constructor({ test, user }) {
        this.user = user;
        this.isPreventingClick = ko.observable(false);

        ko.utils.extend(this, test);

        this.questions.forEach(function initQuestion(question, index) {
            question.id = index + 1;
            question.answer = ko.observable(undefined);
            question.answerText = ko.observable(undefined);
        });

        this.answers.reduce(function buildTextsOfAnswers(acc, { value, print, text }) {
            acc[value] = print || value || text;
            return acc;
        }, this.textsOfAnswers = {});

        this.scalesArray = ko.computed(function computeScalesArray() {
            return Object.keys(this.scales).map(function computeScale(key) {
                return { key, scale: this.scales[key] };
            }, this);
        }, this);

        this.currentQuestion = ko.observable(0);
        this.creationDate = format(new Date());
        this.started = ko.observable(false);
        this.ended = ko.observable(false);
        this.submitted = ko.observable(false);

        this.canNext = ko.computed(function () {
            let index = this.currentQuestion() + 1;
            return this.canGoto(index);
        }, this);

        this.canPrevious = ko.computed(function () {
            let index = this.currentQuestion() - 1;
            return this.canGoto(index);
        }, this);

        this.backLink = ko.computed(function () {
            let index = this.currentQuestion() + 1;

            if (this.canPrevious()) {
                return '#/questions/' + (index - 1);
            }

            return '#/register';
        }, this);

        this.forwardLink = ko.computed(function () {
            if (this.canEnd()) {
                return '#/results';
            }

            let index = this.currentQuestion() + 1;

            return '#/questions/' + (index + 1);
        }, this);

        this.graphics = new QuestionnaireRibbon(this);
        this.reset();

        this.dispose = this.dispose.bind(this);
        this.reset = this.reset.bind(this);
        this.start = this.start.bind(this);
        this.getQuestion = this.getQuestion.bind(this);
        this.canGoto = this.canGoto.bind(this);
        this.canEnd = this.canEnd.bind(this);
        this.next = this.next.bind(this);
        this.fill = this.fill.bind(this);
        this.onHashChange = this.onHashChange.bind(this);

        window.addEventListener('haschange', this.onHashChange);
    }
    dispose() {
        window.removeEventListener('haschange', this.onHashChange);
    }
    reset() {
        window.location.hash = '/register';
        return false;
    }
    start() {
        if (!this.user.valid.all()) {
            this.submitted(true);
            return false;
        }

        window.location.hash = '/questions/1';
        return false;
    }
    getQuestion(index = this.currentQuestion()) {
        if (index < 0 || index >= this.questions.length) {
            return undefined;
        }
        return this.questions[index];
    }
    canGoto(index) {
        let question = this.getQuestion(index);
        let prevQuestion = this.getQuestion(index - 1);

        return this.started() && question && (!prevQuestion || prevQuestion.answer() !== undefined);
    }
    canEnd() {
        let question = this.getQuestion();
        let nextIndex = this.currentQuestion() + 1;

        return question && question.answer() !== undefined && nextIndex === this.questions.length;
    }
    next() {
        let index = this.currentQuestion() + 1;

        window.location.hash = '/questions/' + (index + 1);
    }
    fill(answer) {
        return () => {
            if (this.started()) {
                let question = this.getQuestion();
                question.answer(answer);
                question.answerText(this.textsOfAnswers[answer].replace(/<br\s?\/?>/, ' ').toLowerCase());

                if (this.canEnd()) {
                    window.location.hash = '/results';
                } else {
                    this.next();
                }
            }
        };
    }
    onHashChange({ newURL: url }) {
        let hash = window.location.hash;

        if (!hash || REGISTER_REGEX.test(url)) {
            this.ended(false);
            this.started(false);
        } else if (RESULTS_REGEX.test(url)) {
            if (this.canEnd()) {
                this.calculate();
                this.correct();
                this.ended(true);
            }
        } else if (QUESTION_REGEX.test(url)) {
            let [, index] = url.match(QUESTION_REGEX);
            index = Math.max(0, parseInt(index, 10) - 1);

            this.ended(false);
            if (this.user.valid.all()) {
                this.started(true);
            }

            if (this.canGoto(index)) {
                this.currentQuestion(index);
            }
        } else {
            this.reset();
        }
    }
}
