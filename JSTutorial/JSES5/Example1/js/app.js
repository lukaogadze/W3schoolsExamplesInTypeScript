"use strict";
document.body.onload = function () {
    var x = 10;
    // Now x is 10
    {
        var x = 2;
        // Now x is 2
    }
    // Now x is 2
    document.getElementById("demo").innerHTML = x.toString();
};
//# sourceMappingURL=app.js.map