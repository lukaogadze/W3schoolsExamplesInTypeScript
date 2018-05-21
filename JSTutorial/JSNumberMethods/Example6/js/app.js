"use strict";
document.body.onload = function () {
    var result = Number(true) + "<br>" + Number(false) + "<br>" + Number("  10") + "<br>" + Number("10  ") + "<br>" + Number("10 6") + "<br>" + Number("John");
    document.getElementById("demo").innerHTML = result;
};
//# sourceMappingURL=app.js.map