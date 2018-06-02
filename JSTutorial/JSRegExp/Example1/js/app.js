"use strict";
document.body.onload = function () {
    function myFunction() {
        var str = "Visit W3Schools!";
        var n = str.search(/w3Schools/i);
        document.getElementById("demo").innerHTML = n.toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map