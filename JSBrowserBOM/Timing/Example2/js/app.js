"use strict";
window.onload = function () {
    function myFunction() {
        alert('Hello');
    }
    var btns = document.getElementsByTagName("button");
    var timeoutNum = 0;
    btns[0].onclick = function () {
        timeoutNum = setTimeout(myFunction, 3000);
    };
    btns[1].onclick = function () {
        clearTimeout(timeoutNum);
    };
};
//# sourceMappingURL=app.js.map