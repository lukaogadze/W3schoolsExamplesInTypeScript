"use strict";
window.onload = function () {
    function myTimer() {
        var d = new Date();
        document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    }
    var myVar = setInterval(myTimer, 1000);
    document.getElementsByTagName("button")[0].onclick = function () {
        clearInterval(myVar);
    };
};
//# sourceMappingURL=app.js.map