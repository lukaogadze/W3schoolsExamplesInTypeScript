"use strict";
window.onload = function () {
    var myObj, x = "";
    myObj = {
        "name": "John",
        "age": 30,
        "cars": {
            "car1": "Ford",
            "car2": "BMW",
            "car3": "Fiat"
        }
    };
    delete myObj.cars["car2"];
    for (var i in myObj.cars) {
        x += (myObj.cars[i]) + "<br>";
    }
    document.getElementById("demo").innerHTML = x;
};
//# sourceMappingURL=app.js.map