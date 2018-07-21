"use strict";
window.onload = function () {
    var x = 10;
    // Here x is 10
    {
        var x_1 = 2;
        // Here x is 2
        console.log(x_1);
    }
    // Here x is 10
    document.getElementById("demo").innerHTML = x.toString();
};
//# sourceMappingURL=app.js.map