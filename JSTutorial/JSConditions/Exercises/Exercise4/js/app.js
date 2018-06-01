"use strict";
// Add an else statement to display "You're not John!".
// var firstName = "Greg";
// if (firstName === "John") {
//     document.getElementById("demo").innerHTML = "Hello John!";
// }
document.body.onload = function () {
    var firstName = "Greg", name = "John";
    if (firstName === name) {
        document.getElementById("demo").innerHTML = "Hello John!";
    }
    else {
        document.getElementById("demo").innerHTML = "You're not John!";
    }
};
//# sourceMappingURL=app.js.map