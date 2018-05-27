"use strict";
document.body.onload = function () {
    var points = [40, 100, 1, 5, 25, 10];
    var demo = document.getElementById("demo");
    function myArrMax(arr) {
        return Math.max.apply(null, arr);
    }
    demo.innerHTML = myArrMax(points).toString();
};
//# sourceMappingURL=app.js.map