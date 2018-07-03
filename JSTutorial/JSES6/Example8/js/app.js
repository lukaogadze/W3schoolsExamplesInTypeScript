"use strict";
document.body.onload = function () {
    // this works in ts if you change js version from es5 to es6
    document.getElementById("demo").innerHTML =
        Number.isInteger(10) + "<br>" + Number.isInteger(10.5);
};
//# sourceMappingURL=app.js.map