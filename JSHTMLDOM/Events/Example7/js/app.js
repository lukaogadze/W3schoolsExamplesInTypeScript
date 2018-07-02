"use strict";
window.onload = function () {
    function mOver(obj) {
        obj.innerHTML = "Thank You";
    }
    function mOut(obj) {
        obj.innerHTML = "Mouse Over Me";
    }
    var div = document.getElementsByTagName("div")[0];
    div.onmouseover = function () {
        mOver(this);
    };
    div.onmouseout = function () {
        mOut(this);
    };
};
//# sourceMappingURL=app.js.map