"use strict";
document.body.onload = function () {
    var cars = [
        { type: "Volvo", year: 2016 },
        { type: "Saab", year: 2001 },
        { type: "BMW", year: 2010 }
    ];
    function displayCars() {
        var demo = document.getElementById("demo");
        demo.innerHTML = "";
        cars.forEach(function (car) {
            demo.innerHTML += car.type + " " + car.year + "<br>";
        });
    }
    displayCars();
    document.getElementsByTagName("button")[0].onclick = function () {
        cars.sort(function (a, b) {
            var x = a.type.toLowerCase();
            var y = b.type.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
        displayCars();
    };
};
//# sourceMappingURL=app.js.map