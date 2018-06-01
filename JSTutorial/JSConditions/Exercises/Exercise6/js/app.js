"use strict";
// The if/else statement does not work. try to fix it
// var greeting;
// var hour = new Date().getHours();
// if (hour < 18) {
//     greeting = "Good day";
// else
//     greeting = "Good evening";
// }
// document.getElementById("demo").innerHTML = greeting;
document.body.onload = function () {
    var greeting;
    var hour = new Date().getHours();
    if (hour < 18) {
        greeting = "Good day";
    }
    else {
        greeting = "Good evening";
    }
    document.getElementById("demo").innerHTML = greeting;
};
//# sourceMappingURL=app.js.map