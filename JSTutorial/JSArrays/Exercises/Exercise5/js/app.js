"use strict";
//Use the length property to add a new item to cars: Mercedes.
document.body.onload = function () {
    var cars = ["Saab", "Volvo", "BMW"];
    cars[cars.length] = "Mercedes";
    document.getElementById("demo").innerHTML = cars.join(",");
};
//# sourceMappingURL=app.js.map