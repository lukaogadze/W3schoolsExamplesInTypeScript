"use strict";
document.body.onload = function () {
    var x = 9.656;
    var result = x.toPrecision() + "<br>" + x.toPrecision(2) + "<br>" + x.toPrecision(4) + "<br>" + x.toPrecision(6);
    document.getElementById("demo").innerHTML = result;
};
//# sourceMappingURL=app.js.map