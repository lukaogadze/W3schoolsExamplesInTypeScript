"use strict";
window.onload = function () {
    function loadDoc(url, cFunction) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                cFunction(this);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    function myFunction(xhttp) {
        document.getElementById("demo").innerHTML =
            xhttp.responseText;
    }
    document.getElementsByTagName("button")[0].onclick = function () {
        loadDoc("https://www.w3schools.com/js/ajax_info.txt", myFunction);
    };
};
//# sourceMappingURL=app.js.map