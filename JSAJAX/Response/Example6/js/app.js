"use strict";
window.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.getResponseHeader("Last-Modified");
        }
    };
    xhttp.open("GET", "https://www.w3schools.com/js/ajax_info.txt", true);
    xhttp.send();
};
//# sourceMappingURL=app.js.map