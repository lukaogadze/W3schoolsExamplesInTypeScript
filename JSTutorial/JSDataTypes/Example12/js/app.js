"use strict";
document.body.onload = function () {
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    var msg = person.firstName + " is " + person.age + " years old.";
    document.getElementById("demo").innerHTML = msg;
};
//# sourceMappingURL=app.js.map