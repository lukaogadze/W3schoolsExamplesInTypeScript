"use strict";
window.onload = function () {
    var x = 10;
    // Here x is 10
    {
        var x = 2;
        // Here x is 2
    }
    // Here x is 2
    document.getElementById("demo").innerHTML = x.toString();
};
//# sourceMappingURL=app.js.map