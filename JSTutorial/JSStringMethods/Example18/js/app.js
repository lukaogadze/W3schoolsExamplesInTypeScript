"use strict";
document.body.onload = function () {
    function myFunction() {
        var demo = document.getElementById("demo");
        var text = demo.innerHTML;
        demo.innerHTML = text.toLowerCase();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map