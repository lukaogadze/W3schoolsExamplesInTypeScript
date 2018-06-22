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
    Person.prototype.nationality = "English";
    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");
    document.getElementById("demo").innerHTML =
        "My father is " + myFather.nationality + ". My mother is " + myMother.nationality;
};
//# sourceMappingURL=app.js.map