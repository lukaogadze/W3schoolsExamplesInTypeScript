"use strict";
window.onload = function () {
    function myFunction() {
        alert('Hello');
    }
    document.getElementsByTagName("button")[0].onclick = function () {
        setTimeout(myFunction, 3000);
    };
};
//# sourceMappingURL=app.js.map