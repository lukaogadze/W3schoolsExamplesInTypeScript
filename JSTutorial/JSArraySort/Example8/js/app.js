"use strict";
document.body.onload = function () {
    var points = [40, 100, 1, 5, 25, 10];
    var demo = document.getElementById("demo");
    points.sort(function (a, b) { return b - a; });
    demo.innerHTML = points[0].toString();
};
//# sourceMappingURL=app.js.map