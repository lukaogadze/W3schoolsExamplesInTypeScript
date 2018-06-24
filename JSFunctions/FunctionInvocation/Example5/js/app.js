"use strict";
window.onload = function () {
    var myObject = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this;
        }
    };
    document.getElementById("demo").innerHTML = myObject.fullName().toString();
};
//# sourceMappingURL=app.js.map