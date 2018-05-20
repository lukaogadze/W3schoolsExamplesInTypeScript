"use strict";
document.body.onload = function () {
    var myNumber = 2;
    var txt = "";
    while (myNumber != Infinity) {
        myNumber *= myNumber;
        txt += (myNumber + "<br>");
    }
    document.getElementById("demo").innerHTML = txt;
};
//# sourceMappingURL=app.js.map