import './RegisterForm.css';
import template from './RegisterForm.tpl';
import uniq from 'util/uniq';

function toggleValidInput(el) {
    if (el.checkValidity()) {
        el.classList.remove('invalid');
    } else {
        el.classList.add('invalid');
    }
}

export default class RegisterForm {
    constructor({ user, survey, submitted = false, valid = false, onsubmit }) {
        this.id = uniq('RegisterForm');
        this.user = user;
        this.survey = survey;
        this.submitted = submitted;
        this.valid = valid;
        this.onsubmit = onsubmit || function noop() {};
    }
    get listeners() {
        return {
            'input': {
                change: ({ target }) => {
                    let { value, name } = target;

                    if (name) {
                        this.user[name] = value;
                    }

                    toggleValidInput(target);
                },
            },
            '': {
                submit: (ev) => {
                    ev.preventDefault();
                    let dom = window[this.id];
                    this.submitted = true;
                    this.valid = dom.checkValidity();

                    dom.classList.add('submitted');
                    let els = [...dom.querySelectorAll('input')];
                    els.forEach(toggleValidInput);

                    if (this.valid) {
                        window.location.hash = '/questions/1';
                    }
                },
            },
        };
    }
    render() {
        return template({
            id: this.id,
            extraClass: this.submitted ? 'submitted' : '',
            user: this.user,
            instruction: this.survey.metaData.description,
        });
    }
}
