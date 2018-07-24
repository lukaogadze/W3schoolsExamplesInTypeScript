"use strict";
window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = myArr[0];
        }
    };
    xmlhttp.open("GET", "https://www.w3schools.com/js/json_demo_array.txt", true);
    xmlhttp.send();
};
//# sourceMappingURL=app.js.map