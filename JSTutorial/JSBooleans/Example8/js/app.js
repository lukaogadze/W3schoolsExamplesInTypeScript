"use strict";
document.body.onload = function () {
    function myFunction() {
        var x = null;
        document.getElementById("demo").innerHTML = Boolean(x).toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map