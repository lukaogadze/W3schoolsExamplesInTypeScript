"use strict";
document.body.onload = function () {
    var points = [40, 100, 1, 5, 25, 10];
    var demo = document.getElementById("demo");
    function myArrMin(arr) {
        return Math.min.apply(null, arr);
    }
    demo.innerHTML = myArrMin(points).toString();
};
//# sourceMappingURL=app.js.map