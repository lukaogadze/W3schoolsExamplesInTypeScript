"use strict";
document.body.onload = function () {
    function myFunction() {
        document.getElementById("demo").innerHTML = Boolean(10 > 9).toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map