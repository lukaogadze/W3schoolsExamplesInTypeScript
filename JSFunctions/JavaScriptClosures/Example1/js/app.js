"use strict";
window.onload = function () {
    function myFunction() {
        var a = 4;
        document.getElementById("demo").innerHTML = (a * a).toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map