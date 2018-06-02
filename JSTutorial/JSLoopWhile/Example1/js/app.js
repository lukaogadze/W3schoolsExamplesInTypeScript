"use strict";
document.body.onload = function () {
    var text = "";
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map