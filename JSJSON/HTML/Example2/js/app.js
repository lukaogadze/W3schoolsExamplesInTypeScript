"use strict";
window.onload = function () {
    function change_myselect(sel) {
        var obj, dbParam, xmlhttp, myObj, x, txt = "";
        obj = { "table": sel, "limit": 20 };
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myObj = JSON.parse(this.responseText);
                txt += "<table border='1'>";
                for (x in myObj) {
                    txt += "<tr><td>" + myObj[x].name + "</td></tr>";
                }
                txt += "</table>";
                document.getElementById("demo").innerHTML = txt;
            }
        };
        xmlhttp.open("POST", "https://www.w3schools.com/js/json_demo_db_post.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
    }
    document.getElementById("myselect").onchange = function () {
        change_myselect(this.value);
    };
};
//# sourceMappingURL=app.js.map