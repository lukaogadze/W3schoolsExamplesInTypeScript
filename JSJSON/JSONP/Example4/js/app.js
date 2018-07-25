"use strict";
function clickButton() {
    var s = document.createElement("script");
    s.src = "https://www.w3schools.com/js/demo_jsonp2.php?callback=myDisplayFunction";
    document.body.appendChild(s);
}
function myDisplayFunction(myObj) {
    document.getElementById("demo").innerHTML = myObj.name;
}
document.getElementsByTagName("button")[0].onclick = clickButton;
//# sourceMappingURL=app.js.map