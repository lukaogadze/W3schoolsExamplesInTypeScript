"use strict";
document.body.onload = function () {
    var num = 1;
    try {
        num.toPrecision(500);
    }
    catch (err) {
        document.getElementById("demo").innerHTML = err.name;
    }
};
//# sourceMappingURL=app.js.map