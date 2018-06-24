"use strict";
window.onload = function () {
    var myFunction = new Function("a", "b", "return a * b");
    var x = myFunction(4, 3);
    this.document.getElementById("demo").innerHTML = x.toString();
};
//# sourceMappingURL=app.js.map