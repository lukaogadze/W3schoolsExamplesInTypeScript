"use strict";
window.onload = function () {
    var myObj, x = "";
    myObj = {
        "name": "John",
        "age": 30,
        "cars": ["Ford", "BMW", "Fiat"]
    };
    myObj.cars[1] = "Mercedes";
    for (var i in myObj.cars) {
        x += myObj.cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = x;
};
//# sourceMappingURL=app.js.map