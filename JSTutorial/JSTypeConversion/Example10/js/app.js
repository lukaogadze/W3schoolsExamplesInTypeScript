"use strict";
document.body.onload = function () {
    function myFunction() {
        var y = "John";
        var x = +y;
        document.getElementById("demo").innerHTML =
            typeof y + "<br>" + typeof x;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map