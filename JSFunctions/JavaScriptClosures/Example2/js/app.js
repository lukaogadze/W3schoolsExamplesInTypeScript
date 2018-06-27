"use strict";
window.onload = function () {
    var a = 4;
    function myFunction() {
        document.getElementById("demo").innerHTML = (a * a).toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map