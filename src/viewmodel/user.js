import ko from 'knockout';

export default class User {
    constructor(data = { agree: false }) {
        this.name = ko.observable(data.name);
        this.age = ko.observable(data.age);
        this.gender = ko.observable(data.gender);
        this.agree = ko.observable(data.agree);

        this.valid = {
            gender: ko.computed(function computeGender() {
                let gender = this.gender();
                return gender === 'м' || gender === 'ж';
            }, this),
            age: ko.computed(function computeAge() {
                let age = parseInt(this.age(), 10);
                age = !isNaN(age) && age >= 18;
                return age;
            }, this),
            name: ko.computed(function computeName() {
                let name = this.name();
                name = name && (typeof name === 'string') && name.length > 2;
                return name;
            }, this),
            agree: ko.computed(function computeAgree() {
                return Boolean(this.agree());
            }, this),
        };

        this.valid.all = ko.computed(function computeValid() {
            return this.age() && this.name() && this.agree() && this.gender();
        }, this.valid);

        this.getData = this.getData.bind(this);
    }
    getData() {
        return {
            name: this.name(),
            age: this.age(),
            gender: this.gender(),
            agree: false,
        };
    }
}
