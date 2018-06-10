"use strict";
document.body.onload = function () {
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
    };
    person.name = function () {
        return this.firstName + " " + this.lastName;
    };
    document.getElementById("demo").innerHTML =
        "My father is " + person.name();
};
//# sourceMappingURL=app.js.map