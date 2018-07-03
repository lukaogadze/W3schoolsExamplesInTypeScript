"use strict";
window.onload = function () {
    function myFunction() {
        document.getElementById("demo").innerHTML = Math.random().toString();
    }
    document.getElementById("myDIV").addEventListener("mousemove", myFunction);
    function removeHandler() {
        document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
    }
    document.getElementById("myBtn").onclick = removeHandler;
};
//# sourceMappingURL=app.js.map