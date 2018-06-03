"use strict";
document.body.onload = function () {
    var num = 1;
    try {
        num.toUpperCase();
    }
    catch (err) {
        document.getElementById("demo").innerHTML = err.name;
    }
};
//# sourceMappingURL=app.js.map