"use strict";
window.onload = function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName, age, eyeColor) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.eyeColor = eyeColor;
        }
        return Person;
    }());
    Person.prototype.name = function () {
        return this.firstName + " " + this.lastName;
    };
    var myFather = new Person("John", "Doe", 50, "blue");
    document.getElementById("demo").innerHTML =
        "My father is " + myFather.name();
};
//# sourceMappingURL=app.js.map