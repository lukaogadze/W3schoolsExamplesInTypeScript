"use strict";
window.onload = function () {
    var x = document.getElementById("myBtn");
    function myFunction() {
        alert("Hello World!");
    }
    if (x.addEventListener) {
        x.addEventListener("click", myFunction);
    }
    else if (x.attachEvent) {
        x.attachEvent("onclick", myFunction);
    }
};
//# sourceMappingURL=app.js.map