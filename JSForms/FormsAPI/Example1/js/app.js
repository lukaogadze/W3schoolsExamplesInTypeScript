"use strict";
document.body.onload = function () {
    function myFunction() {
        var inpObj = document.getElementById("id1");
        var demo = document.getElementById("demo");
        if (!inpObj.checkValidity()) {
            demo.innerHTML = inpObj.validationMessage;
        }
        else {
            demo.innerHTML = "Input OK";
        }
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map