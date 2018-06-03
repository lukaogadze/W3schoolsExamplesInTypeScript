"use strict";
document.body.onload = function () {
    var adddlert = undefined;
    try {
        adddlert("Welcome guest!");
    }
    catch (err) {
        document.getElementById("demo").innerHTML = err.message;
    }
};
//# sourceMappingURL=app.js.map