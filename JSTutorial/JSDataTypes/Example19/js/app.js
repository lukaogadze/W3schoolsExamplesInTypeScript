"use strict";
document.body.onload = function () {
    var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    person = undefined;
    document.getElementById("demo").innerHTML = typeof person;
};
//# sourceMappingURL=app.js.map