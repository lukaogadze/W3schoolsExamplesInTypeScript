"use strict";
document.body.onload = function () {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var i = 0;
    var len = cars.length;
    var text = "";
    for (; i < len;) {
        text += cars[i] + "<br>";
        i++;
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map