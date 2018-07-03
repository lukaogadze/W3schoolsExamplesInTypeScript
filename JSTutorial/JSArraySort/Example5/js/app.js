"use strict";
document.body.onload = function () {
    var points = [40, 100, 1, 5, 25, 10];
    var demo = document.getElementById("demo");
    demo.innerHTML = points.toString();
    var buttons = document.getElementsByTagName("button");
    buttons[0].onclick = function () {
        points.sort();
        demo.innerHTML = points.toString();
    };
    buttons[1].onclick = function () {
        points.sort(function (a, b) { return a - b; });
        demo.innerHTML = points.toString();
    };
};
//# sourceMappingURL=app.js.map