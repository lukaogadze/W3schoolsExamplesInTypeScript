"use strict";
document.body.onload = function () {
    function myFunction() {
        var demo = document.getElementById("demo");
        var str = demo.innerHTML;
        var txt = str.replace(/Microsoft/g, "W3Schools");
        demo.innerHTML = txt;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map