"use strict";
window.onload = function () {
    var add = (function () {
        var counter = 0;
        return function () { counter += 1; return counter; };
    })();
    function myFunction() {
        document.getElementById("demo").innerHTML = add().toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map