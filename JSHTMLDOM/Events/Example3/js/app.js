"use strict";
window.onload = function () {
    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }
    document.getElementsByTagName("button")[0].onclick = function () {
        displayDate();
    };
};
//# sourceMappingURL=app.js.map