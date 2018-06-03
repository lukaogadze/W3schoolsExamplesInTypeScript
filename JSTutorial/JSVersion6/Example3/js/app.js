"use strict";
document.body.onload = function () {
    var x = 10;
    // Now x is 10
    {
        var x_1 = 2;
        console.log(x_1);
        // Now x is 2
    }
    // Now x is 10
    document.getElementById("demo").innerHTML = x.toString();
};
//# sourceMappingURL=app.js.map