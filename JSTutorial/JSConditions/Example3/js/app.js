"use strict";
document.body.onload = function () {
    function myFunction() {
        var greeting;
        var time = new Date().getHours();
        if (time < 10) {
            greeting = "Good morning";
        }
        else if (time < 20) {
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