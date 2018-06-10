"use strict";
document.body.onload = function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName, age, eyeColor) {
            if (firstName === void 0) { firstName = ""; }
            if (lastName === void 0) { lastName = ""; }
            if (age === void 0) { age = 0; }
            if (eyeColor === void 0) { eyeColor = ""; }
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.eyeColor = eyeColor;
        }
        return Person;
    }());
    // this isn't valid typescript code    
    // var person = new Object();
    // person.firstName = "John";
    // person.lastName = "Doe";
    // person.age = 50;
    // person.eyeColor = "blue";
    var person = new Person();
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue";
    document.getElementById("demo").innerHTML =
        person.firstName + " is " + person.age + " years old.";
};
//# sourceMappingURL=app.js.map