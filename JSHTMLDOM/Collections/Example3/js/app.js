"use strict";
window.onload = function () {
    function myFunction() {
        var myCollection = document.getElementsByTagName("p");
        for (var i = 0; i < myCollection.length; i++) {
            myCollection[i].style.color = "red";
        }
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map