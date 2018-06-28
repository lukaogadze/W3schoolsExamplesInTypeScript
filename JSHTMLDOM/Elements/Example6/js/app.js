"use strict";
window.onload = function () {
    function myFunction() {
        var x = document.forms.namedItem("frm1");
        var text = "";
        for (var i = 0; i < x.length; i++) {
            text += x.elements[i].value + "<br>";
        }
        document.getElementById("demo").innerHTML = text;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map