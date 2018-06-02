"use strict";
// Use the continue statement to not output the array's element "Saab".
// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var text = ""
// var i;
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;
document.body.onload = function () {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var text = "";
    for (var i = 0; i < cars.length; i++) {
        if (cars[i] === "Saab") {
            continue;
        }
        text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map