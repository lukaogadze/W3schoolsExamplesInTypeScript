"use strict";
window.onload = function () {
    var myObj = {
        "name": "John",
        "age": 30,
        "cars": {
            "car1": "Ford",
            "car2": "BMW",
            "car3": "Fiat"
        }
    };
    document.getElementById("demo").innerHTML += myObj.cars.car2 + "<br>";
    //or:
    document.getElementById("demo").innerHTML += myObj.cars["car2"];
};
//# sourceMappingURL=app.js.map