"use strict";
window.onload = function () {
    var myObj, x = "";
    myObj = {
        "name": "John",
        "age": 30,
        "cars": [
            { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
            { "name": "BMW", "models": ["320", "X3", "X5"] },
            { "name": "Fiat", "models": ["500", "Panda"] }
        ]
    };
    for (var i in myObj.cars) {
        x += "<h2>" + myObj.cars[i].name + "</h2>";
        for (var j in myObj.cars[i].models) {
            x += myObj.cars[i].models[j] + "<br>";
        }
    }
    document.getElementById("demo").innerHTML = x;
};
//# sourceMappingURL=app.js.map