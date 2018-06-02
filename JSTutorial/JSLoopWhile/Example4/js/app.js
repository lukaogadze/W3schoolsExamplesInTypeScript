"use strict";
document.body.onload = function () {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var i = 0;
    var text = "";
    while (cars[i]) {
        text += cars[i] + "<br>";
        i++;
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map