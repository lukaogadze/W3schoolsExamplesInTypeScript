"use strict";
document.body.onload = function () {
    function myFunction() {
        var str = document.getElementById("demo").innerHTML;
        var txt = str.replace(/microsoft/i, "W3Schools");
        document.getElementById("demo").innerHTML = txt;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map