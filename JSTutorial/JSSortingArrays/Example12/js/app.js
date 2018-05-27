"use strict";
document.body.onload = function () {
    var points = [40, 100, 1, 5, 25, 10];
    var demo = document.getElementById("demo");
    function myArrayMin(arr) {
        var len = arr.length;
        var min = Infinity;
        while (len--) {
            if (arr[len] < min) {
                min = arr[len];
            }
        }
        return min;
    }
    demo.innerHTML = myArrayMin(points).toString();
};
//# sourceMappingURL=app.js.map