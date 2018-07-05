"use strict";
window.onload = function () {
    var demo = document.getElementById("demo");
    function myTimer() {
        var d = new Date();
        demo.innerHTML = d.toLocaleTimeString();
    }
    var myVar = setInterval(myTimer, 1000);
    console.log(myVar);
};
//# sourceMappingURL=app.js.map