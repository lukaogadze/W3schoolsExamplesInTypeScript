"use strict";
document.body.onload = function () {
    var x = 9.656;
    var result = x.toExponential() + "<br>" + x.toExponential(2) + "<br>" + x.toExponential(4) + "<br>" + x.toExponential(6);
    document.getElementById("demo").innerHTML = result;
};
//# sourceMappingURL=app.js.map