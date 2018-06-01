"use strict";
document.body.onload = function () {
    var x = "0";
    var text;
    switch (x) {
        case 0:
            text = "Off";
            break;
        // case 1:
        //     text = "On";
        default:
            text = "No value found";
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map