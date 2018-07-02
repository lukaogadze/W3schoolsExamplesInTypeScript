"use strict";
window.onload = function () {
    function mDown(obj) {
        obj.style.backgroundColor = "#1ec5e5";
        obj.innerHTML = "Release Me";
    }
    function mUp(obj) {
        obj.style.backgroundColor = "#D94A38";
        obj.innerHTML = "Thank You";
    }
    var div = document.getElementsByTagName("div")[0];
    div.onmousedown = function () {
        mDown(this);
    };
    div.onmouseup = function () {
        mUp(this);
    };
};
//# sourceMappingURL=app.js.map