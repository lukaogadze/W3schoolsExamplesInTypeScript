"use strict";
window.onload = function () {
    var x = this.document.getElementById("main");
    var y = x.getElementsByTagName("p");
    this.document.getElementById("demo").innerHTML =
        "The first paragraph (index 0) inside \"main\" is: " + y[0].innerHTML;
};
//# sourceMappingURL=app.js.map