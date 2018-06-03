"use strict";
document.body.onload = function () {
    function myFunction(x, y) {
        if (y === undefined) {
            y = 0;
        }
        return x * y;
    }
    document.getElementById("demo").innerHTML = myFunction(4).toString();
};
//# sourceMappingURL=app.js.map