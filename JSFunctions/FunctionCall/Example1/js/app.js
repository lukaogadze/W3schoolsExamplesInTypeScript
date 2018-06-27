"use strict";
window.onload = function () {
    var myObject = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    var x = myObject.fullName();
    document.getElementById("demo").innerHTML = x;
};
//# sourceMappingURL=app.js.map