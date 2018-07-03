"use strict";
window.onload = function () {
    document.getElementById("myP1").addEventListener("click", function () {
        alert("You clicked the white element!");
    }, false);
    document.getElementById("myDiv1").addEventListener("click", function () {
        alert("You clicked the orange element!");
    }, false);
    document.getElementById("myP2").addEventListener("click", function () {
        alert("You clicked the white element!");
    }, true);
    document.getElementById("myDiv2").addEventListener("click", function () {
        alert("You clicked the orange element!");
    }, true);
};
//# sourceMappingURL=app.js.map