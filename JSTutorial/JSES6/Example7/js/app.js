"use strict";
document.body.onload = function () {
    // this works in ts if you change js version from es5 to es6
    var x = Number.MAX_SAFE_INTEGER;
    document.getElementById("demo").innerHTML = x.toString();
};
//# sourceMappingURL=app.js.map