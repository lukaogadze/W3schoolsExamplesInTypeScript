"use strict";
document.body.onload = function init() {
    function turnOn() {
        document.getElementById("myImage").src = "img/on.bmp";
    }
    function turnOff() {
        document.getElementById("myImage").src = "img/off.bmp";
    }
    var btns = document.getElementsByTagName("button");
    btns[0].onclick = turnOn;
    btns[1].onclick = turnOff;
};
//# sourceMappingURL=app.js.map