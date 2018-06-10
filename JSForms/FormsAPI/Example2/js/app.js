"use strict";
document.body.onload = function () {
    function myFunction() {
        var txt = "";
        var inp = document.getElementById("id1");
        if (inp.validity.rangeOverflow) {
            txt = "Value too large";
        }
        else {
            txt = "Input OK";
        }
        document.getElementById("demo").innerHTML = txt;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map