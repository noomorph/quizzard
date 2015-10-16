export default class User {
    constructor({ name = '', age = NaN, gender = null, agree = false, submitted = false } = {}) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.agree = agree;
        this.submitted = submitted;
    }
    isValid() {
        return false;
    }
}
