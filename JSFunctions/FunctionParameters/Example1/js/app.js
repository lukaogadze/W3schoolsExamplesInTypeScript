"use strict";
window.onload = function () {
    function myFunction(x, y) {
        if (y === void 0) { y = 0; }
        return x * y;
    }
    document.getElementById("demo").innerHTML = myFunction(4).toString();
};
//# sourceMappingURL=app.js.map