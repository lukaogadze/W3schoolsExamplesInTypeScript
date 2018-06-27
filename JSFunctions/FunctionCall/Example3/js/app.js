"use strict";
window.onload = function () {
    var person = {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    // const person1: IPerson = {
    //     firstName:"John",
    //     lastName: "Doe",
    // }
    var person2 = {
        firstName: "Mary",
        lastName: "Doe",
    };
    var x = person.fullName.call(person2);
    document.getElementById("demo").innerHTML = x;
};
//# sourceMappingURL=app.js.map