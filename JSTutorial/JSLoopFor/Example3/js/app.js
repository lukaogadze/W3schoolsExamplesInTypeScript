"use strict";
document.body.onload = function () {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var text = "";
    for (var i = 0, len = cars.length; i < len; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map