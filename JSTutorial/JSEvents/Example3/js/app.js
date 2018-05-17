"use strict";
document.body.onload = function () {
    var btn = document.getElementsByTagName("button")[0];
    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }
    btn.onclick = displayDate;
};
//# sourceMappingURL=app.js.map