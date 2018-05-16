"use strict";
document.body.onload = function () {
    function toCelsius(f) {
        return (5 / 9) * (f - 32);
    }
    document.getElementById("demo").innerHTML = "The temperature is " + toCelsius(77) + " Celsius";
};
//# sourceMappingURL=app.js.map