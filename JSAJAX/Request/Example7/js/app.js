"use strict";
window.onload = function () {
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://www.w3schools.com/js/ajax_info.txt", false);
        xhttp.send();
        document.getElementById("demo").innerHTML = xhttp.responseText;
    }
    document.getElementsByTagName("button")[0].onclick = loadDoc;
};
//# sourceMappingURL=app.js.map