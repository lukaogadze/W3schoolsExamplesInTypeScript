"use strict";
window.onload = function () {
    var x = document.getElementById("myBtn");
    function myFunction() {
        alert("Hello World!");
    }
    function someOtherFunction() {
        alert("This function was also executed!");
    }
    x.addEventListener("click", myFunction);
    x.addEventListener("click", someOtherFunction);
};
//# sourceMappingURL=app.js.map