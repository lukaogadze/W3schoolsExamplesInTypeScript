"use strict";
document.body.onload = function () {
    var btn = document.getElementsByTagName("button")[0];
    btn.onclick = function () {
        document.getElementById("demo").innerHTML = Date();
    };
};
//# sourceMappingURL=app.js.map