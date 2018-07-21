"use strict";
window.onload = function () {
    function showHint(str) {
        var xhttp;
        if (str.length == 0) {
            document.getElementById("txtHint").innerHTML = "";
            return;
        }
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "https://www.w3schools.com/js/gethint.asp?q=" + str, true);
        xhttp.send();
    }
    document.getElementsByTagName("input")[0].onkeyup = function () {
        showHint(this.value);
    };
};
//# sourceMappingURL=app.js.map