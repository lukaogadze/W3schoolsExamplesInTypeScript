"use strict";
document.body.onload = function () {
    function myFunction() {
        var txt = "";
        if (document.getElementById("id1").validity.rangeUnderflow) {
            txt = "Value too small";
        }
        else {
            txt = "Input OK";
        }
        document.getElementById("demo").innerHTML = txt;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map