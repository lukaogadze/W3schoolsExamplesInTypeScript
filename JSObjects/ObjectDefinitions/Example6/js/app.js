"use strict";
document.body.onload = function () {
    var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    var x = person;
    x.age = 10;
    document.getElementById("demo").innerHTML =
        person.firstName + " is " + person.age + " years old.";
};
//# sourceMappingURL=app.js.map