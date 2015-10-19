export default class User {
    constructor({
        name = '',
        age = NaN,
        gender = NaN,
        agree = false,
        submitted = false,
        valid = false,
    } = {}) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.agree = agree;
        this.submitted = submitted;
        this.valid = valid;
    }
}
