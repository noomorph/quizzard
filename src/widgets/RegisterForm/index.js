import template from './RegisterForm.tpl';

export default class RegisterForm {
    constructor({ name = '', age = NaN, gender = null, agree = false, submitted = false } = {}) {
        this.id = 'intro' + String(Math.random()).slice(2);
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.agree = agree;
        this.submitted = submitted;
    }
    isValid() {
        return false;
    }
    static get listeners() {
        return {
            'input': {
                change({ target: { value, name } }) {
                    if (name) {
                        this[name] = value;
                    }
                },
            },
            'button': {
                click() {
                    if (this.isValid()) {
                        alert('you are valid'); // eslint-disable-line
                    }
                },
            },
        };
    }
    render() {
        return template(this);
    }
}
