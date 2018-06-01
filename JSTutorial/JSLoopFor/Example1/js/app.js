"use strict";
document.body.onload = function () {
    var cars = [
        "BMW",
        "Volvo",
        "Saab",
        "Ford",
        "Fiat",
        "Audi"
    ];
    var text = "";
    for (var i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map