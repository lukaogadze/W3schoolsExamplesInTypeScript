"use strict";
window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = myObj[2];
        }
    };
    xmlhttp.open("GET", "https://www.w3schools.com/js/demo_file_array.php", true);
    xmlhttp.send();
};
//# sourceMappingURL=app.js.map