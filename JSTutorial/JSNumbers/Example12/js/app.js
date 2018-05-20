"use strict";
document.body.onload = function () {
    var x = "100";
    var y = "10";
    // this isn't valid ts code so it's i commented it out
    // const z: number = x / y;
    var z = parseInt(x) / parseInt(y);
    document.getElementById("demo").innerHTML = z.toString();
};
//# sourceMappingURL=app.js.map