"use strict";
document.body.onload = function () {
    function toCelsius(f) {
        return (5 / 9) * (f - 32);
    }
    document.getElementById("demo").innerHTML = toCelsius(77).toString();
};
//# sourceMappingURL=app.js.map