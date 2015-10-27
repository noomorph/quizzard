import './RegisterForm.css';
import template from './RegisterForm.tpl';
import uniq from 'util/uniq';

function toggleValidInput(el) {
    if (el.checkValidity()) {
        el.parentNode.classList.remove('invalid');
    } else {
        el.parentNode.classList.add('invalid');
    }
}

export default class RegisterForm {
    constructor({ id, user, survey }) {
        this.id = id || uniq('RegisterForm');
        this.user = user;
        this.survey = survey;
        this.submitted = !!user.valid;
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
                    this.user.valid = false; // HACK: marking as dirty
                },
            },
            '': {
                submit: (ev) => {
                    ev.preventDefault();
                    let dom = document.getElementById(this.id);
                    this.submitted = true;
                    this.user.valid = dom.checkValidity();

                    dom.classList.add('submitted');
                    let els = [].slice.call(dom.querySelectorAll('input'));
                    els.forEach(toggleValidInput);

                    if (this.user.valid) {
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
