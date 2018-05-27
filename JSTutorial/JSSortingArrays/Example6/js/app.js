"use strict";
document.body.onload = function () {
    var points = [40, 100, 1, 5, 25, 10];
    var demo = document.getElementById("demo");
    demo.innerHTML = points.toString();
    var buttons = document.getElementsByTagName("button");
    buttons[0].onclick = function () {
        points.sort(function () { return 0.5 - Math.random(); });
        demo.innerHTML = points.toString();
    };
};
//# sourceMappingURL=app.js.map