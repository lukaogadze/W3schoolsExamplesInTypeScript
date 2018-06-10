"use strict";
document.body.onload = function () {
    // Create an object:
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    // Display data from the object:
    document.getElementById("demo").innerHTML = person.fullName();
};
//# sourceMappingURL=app.js.map