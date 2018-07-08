"use strict";
window.onload = function () {
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "https://www.w3schools.com/js/demo_get2.asp?fname=Henry&lname=Ford", true);
        xhttp.send();
    }
    document.getElementsByTagName("button")[0].onclick = loadDoc;
};
//# sourceMappingURL=app.js.map