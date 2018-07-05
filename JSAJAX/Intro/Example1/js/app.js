"use strict";
window.onload = function () {
    // Cross-Origin Request Blocked... fk!!!
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML =
                    this.responseText;
            }
        };
        xhttp.open("GET", "https://www.w3schools.com/js/ajax_info.txt", true);
        xhttp.send();
    }
    document.getElementsByTagName("button")[0].onclick = loadDoc;
};
//# sourceMappingURL=app.js.map