"use strict";
window.onload = function () {
    var myObj, x = "";
    myObj = {
        "name": "John",
        "age": 30,
        "cars": ["Ford", "BMW", "Fiat"]
    };
    for (var i = 0; i < myObj.cars.length; i++) {
        x += myObj.cars[i] + "<br />";
    }
    document.getElementById("demo").innerHTML = x;
};
//# sourceMappingURL=app.js.map