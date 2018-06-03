"use strict";
document.body.onload = function () {
    var person = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    document.getElementById("demo").innerHTML =
        person[0] + " " + person.length;
};
//# sourceMappingURL=app.js.map