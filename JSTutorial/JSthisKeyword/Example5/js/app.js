"use strict";
document.body.onload = function () {
    // Create an object:
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        myFunction: function () {
            return this;
        }
    };
    // Display data from the object:
    document.getElementById("demo").innerHTML = person.myFunction().toString();
};
//# sourceMappingURL=app.js.map