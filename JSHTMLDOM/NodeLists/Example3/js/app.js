"use strict";
window.onload = function () {
    function myFunction() {
        var myNodelist = document.querySelectorAll("p");
        for (var i = 0; i < myNodelist.length; i++) {
            myNodelist[i].style.color = "red";
        }
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map