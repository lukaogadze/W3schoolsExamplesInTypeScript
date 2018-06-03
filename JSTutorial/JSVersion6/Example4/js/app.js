"use strict";
document.body.onload = function () {
    function myFunction(x, y) {
        if (y === void 0) { y = 10; }
        // y is 10 if not passed or undefined
        return x + y;
    }
    document.getElementById("demo").innerHTML = myFunction(5).toString();
};
//# sourceMappingURL=app.js.map