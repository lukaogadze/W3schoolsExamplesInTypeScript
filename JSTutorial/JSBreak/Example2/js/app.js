"use strict";
document.body.onload = function () {
    var text = "";
    for (var i = 0; i < 10; i++) {
        if (i === 3) {
            continue;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map