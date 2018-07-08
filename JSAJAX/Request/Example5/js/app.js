"use strict";
window.onload = function () {
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "https://www.w3schools.com/js/demo_post2.asp", true);
        xhttp.setRequestHeader("Content-type", "application/x-ww-form-urlencoded");
        xhttp.send("fname=Henry&lname=Food");
    }
    document.getElementsByTagName("button")[0].onclick = loadDoc;
};
//# sourceMappingURL=app.js.map