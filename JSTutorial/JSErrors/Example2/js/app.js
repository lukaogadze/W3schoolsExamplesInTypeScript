"use strict";
document.body.onload = function () {
    function myFunction() {
        var message, x;
        message = document.getElementById("p01");
        message.innerHTML = "";
        x = document.getElementById("demo").value;
        try {
            if (x == "") {
                throw "empty";
            }
            if (isNaN(x)) {
                throw "not a nmber";
            }
            x = Number(x);
            if (x < 5) {
                throw "too low";
            }
            if (x > 10) {
                throw "too high";
            }
        }
        catch (error) {
            message.innerHTML = "Input is " + error;
        }
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map