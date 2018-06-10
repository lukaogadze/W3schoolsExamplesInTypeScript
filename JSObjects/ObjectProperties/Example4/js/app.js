"use strict";
document.body.onload = function () {
    var person = {
        firstname: "John",
        lastname: "Doe",
        age: 50,
        eyecolor: "blue"
    };
    person.nationality = "English";
    document.getElementById("demo").innerHTML =
        person.firstname + " is " + person.nationality + ".";
};
//# sourceMappingURL=app.js.map