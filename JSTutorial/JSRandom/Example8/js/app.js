"use strict";
document.body.onload = function () {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    document.getElementsByTagName("button")[0].onclick = function () {
        document.getElementById("demo").innerHTML = getRndInteger(0, 10).toString();
    };
};
//# sourceMappingURL=app.js.map