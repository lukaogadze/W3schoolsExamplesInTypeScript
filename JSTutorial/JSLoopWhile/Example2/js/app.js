"use strict";
document.body.onload = function () {
    var text = "";
    var i = 0;
    do {
        text += "<br>The number is " + i;
        i++;
    } while (i < 10);
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map