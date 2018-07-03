"use strict";
document.body.onload = function () {
    var points = [40, 100, 1, 5, 25, 10];
    var demo = document.getElementById("demo");
    function myArrayMax(arr) {
        var len = arr.length;
        var max = -Infinity;
        while (len--) {
            if (arr[len] > max) {
                max = arr[len];
            }
        }
        return max;
    }
    demo.innerHTML = myArrayMax(points).toString();
};
//# sourceMappingURL=app.js.map