"use strict";
document.body.onload = function () {
    function myFunction() {
        var text = document.getElementById("p01").innerHTML;
        document.getElementById("demo").innerHTML = (/e/.exec(text)).toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map