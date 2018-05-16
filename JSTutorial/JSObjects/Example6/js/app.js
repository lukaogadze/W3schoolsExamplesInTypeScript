"use strict";
document.body.onload = function () {
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566
    };
    document.getElementById("demo").innerHTML = person["firstName"] + " " + person["lastName"];
};
//# sourceMappingURL=app.js.map