"use strict";
window.onload = function () {
    function changeText(elem) {
        elem.innerHTML = "Ooops!";
    }
    document.getElementsByTagName("h1")[0].onclick = function () {
        changeText(this);
    };
};
//# sourceMappingURL=app.js.map