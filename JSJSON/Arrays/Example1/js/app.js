"use strict";
window.onload = function () {
    var myObj, x;
    myObj = {
        "name": "John",
        "age": 30,
        "cars": ["Ford", "BMW", "Fiat"]
    };
    x = myObj.cars[0];
    document.getElementById("demo").innerHTML = x;
};
//# sourceMappingURL=app.js.map