"use strict";
window.onload = function () {
    function findMax() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var max = -Infinity;
        for (var i = 0; i < params.length; i++) {
            if (params[i] > max) {
                max = params[i];
            }
        }
        return max;
    }
    document.getElementById("demo").innerHTML = findMax(4, 5, 6).toString();
};
//# sourceMappingURL=app.js.map