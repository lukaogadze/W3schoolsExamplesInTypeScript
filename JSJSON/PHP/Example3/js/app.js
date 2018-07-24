"use strict";
window.onload = function () {
    var obj, dbParam, xmlhttp;
    obj = { "table": "customers", "limit": 10 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "https://www.w3schools.com/js/json_demo_db.php?x=" + dbParam, true);
    xmlhttp.send();
};
//# sourceMappingURL=app.js.map