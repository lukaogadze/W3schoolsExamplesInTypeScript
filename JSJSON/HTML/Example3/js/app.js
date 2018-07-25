"use strict";
window.onload = function () {
    var obj, dbParam, xmlhttp, myObj, txt = "";
    obj = { "table": "customers", "limit": 20 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            txt += "<select>";
            for (var x in myObj) {
                txt += "<option>" + myObj[x].name;
            }
            txt += "</select>";
            document.getElementById("demo").innerHTML = txt;
        }
    };
    xmlhttp.open("POST", "https://www.w3schools.com/js/json_demo_db_post.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
};
//# sourceMappingURL=app.js.map