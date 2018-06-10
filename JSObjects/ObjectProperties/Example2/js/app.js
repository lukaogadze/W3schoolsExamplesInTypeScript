"use strict";
document.body.onload = function () {
    var person = {
        firstname: "John",
        lastname: "Doe",
        age: 50,
        eyecolor: "blue"
    };
    document.getElementById("demo").innerHTML =
        person["firstname"] + " is " + person["age"] + " years old.";
};
//# sourceMappingURL=app.js.map