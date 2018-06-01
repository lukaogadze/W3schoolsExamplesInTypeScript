"use strict";
document.body.onload = function () {
    function myFunction() {
        var hour = new Date().getHours();
        var greeting;
        if (hour < 18) {
            greeting = "Good day";
        }
        else {
            greeting = "Good evening";
        }
        document.getElementById("demo").innerHTML = greeting;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map