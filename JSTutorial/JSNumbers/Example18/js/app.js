"use strict";
document.body.onload = function () {
    // this isn't valid ts code so it's commented out
    // const x: number = 100 / "Apple";
    var x = NaN;
    document.getElementById("demo").innerHTML = isNaN(x).toString();
};
//# sourceMappingURL=app.js.map