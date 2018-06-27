"use strict";
window.onload = function () {
    var person = {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    var person1 = {
        firstName: "John",
        lastName: "Doe",
    };
    // const person2: IPerson = {
    //     firstName:"Mary",
    //     lastName: "Doe",
    // }
    var x = person.fullName.call(person1);
    document.getElementById("demo").innerHTML = x;
};
//# sourceMappingURL=app.js.map