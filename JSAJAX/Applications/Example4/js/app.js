"use strict";
window.onload = function () {
    var x, xmlhttp, xmlDoc;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.w3schools.com/js/cd_catalog.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    x = xmlDoc.getElementsByTagName("CD");
    var table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (var i = 0; i < x.length; i++) {
        table += "<tr onclick='displayCD(" + i + ")'><td>";
        table += x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
        table += "</td><td>";
        table += x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
        table += "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
    function displayCD(i) {
        document.getElementById("showCD").innerHTML =
            "Artist: " +
                x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
                "<br>Title: " +
                x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                "<br>Year: " +
                x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
    }
    console.log(displayCD.toString());
};
//# sourceMappingURL=app.js.map