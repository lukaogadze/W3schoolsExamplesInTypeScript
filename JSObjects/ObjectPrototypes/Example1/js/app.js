"use strict";
window.onload = function () {
    // this isn't valid ts code
    // function Person(first, last, age, eye) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.eyeColor = eye;
    // }
    var Person = /** @class */ (function () {
        function Person(firstName, lastName, age, eyeColor) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.eyeColor = eyeColor;
        }
        return Person;
    }());
    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");
    document.getElementById("demo").innerHTML =
        "My father is " + myFather.age + ". My mother is " + myMother.age;
};
//# sourceMappingURL=app.js.map