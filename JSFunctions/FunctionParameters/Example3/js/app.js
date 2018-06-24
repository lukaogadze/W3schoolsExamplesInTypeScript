"use strict";
window.onload = function () {
    function sumAll() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var sum = 0;
        for (var i = 0; i < params.length; i++) {
            sum += params[i];
        }
        return sum;
    }
    this.document.getElementById("demo").innerHTML =
        sumAll(1, 123, 500, 115, 44, 88).toString();
};
//# sourceMappingURL=app.js.map