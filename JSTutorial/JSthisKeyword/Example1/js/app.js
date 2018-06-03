"use strict";
document.body.onload = function () {
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            return this.firstName + " " + (this, this.lastName);
        }
    };
    document.getElementById("demo").innerHTML = person.fullName();
};
//# sourceMappingURL=app.js.map