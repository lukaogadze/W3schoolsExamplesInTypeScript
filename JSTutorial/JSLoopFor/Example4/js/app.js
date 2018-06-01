"use strict";
document.body.onload = function () {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var i = 2;
    var len = cars.length;
    var text = "";
    for (; i < len; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map