/*global ko*/
/*exported User*/

function User(data) {
    var me = this;
    data = data || { agree: false };
    this.name = ko.observable(data.name);
    this.age = ko.observable(data.age);
    this.gender = ko.observable(data.gender);
    this.agree = ko.observable(data.agree);

    this.valid = {
        gender: ko.computed(function () {
            var gender = this.gender();
            return gender === "м" || gender === "ж";
        }, this),
        age: ko.computed(function () {
            var age = parseInt(this.age(), 10);
            age = !isNaN(age) && age >= 18;
            return age;
        }, this),
        name: ko.computed(function () {
            var name = this.name();
            name = name && (typeof name === 'string') && name.length > 2;
            return name;
        }, this),
        agree: ko.computed(function () {
            return !!this.agree();
        }, this)
    };

    this.valid.all = ko.computed(function () {
        return this.age() && this.name() && this.agree() && this.gender();
    }, this.valid);

    this.getData = function () {
        return {
            name: me.name(),
            age: me.age(),
            gender: me.gender(),
            agree: false
        };
    };
}
