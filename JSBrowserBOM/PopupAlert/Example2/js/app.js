"use strict";
window.onload = function () {
    function myFunction() {
        var txt = "";
        if (confirm("Press a button!")) {
            txt = "You pressed OK!";
        }
        else {
            txt = "You pressed Cancel!";
        }
        document.getElementById("demo").innerHTML = txt;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map