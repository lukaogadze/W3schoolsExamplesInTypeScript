"use strict";
window.onload = function () {
    var myCollection = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML =
        "The innerHTML of the second paragraph is: " +
            myCollection[1].innerHTML;
};
//# sourceMappingURL=app.js.map