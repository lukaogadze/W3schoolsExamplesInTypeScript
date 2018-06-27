"use strict";
window.onload = function () {
    var arr = [1, 2, 3, 4, 5, 6, 7];
    var max = Math.max.apply(Math, arr);
    document.getElementById("demo").innerHTML = max.toString();
};
//# sourceMappingURL=app.js.map