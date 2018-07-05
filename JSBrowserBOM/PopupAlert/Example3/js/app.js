"use strict";
window.onload = function () {
    function myFunction() {
        var txt = "";
        var person = prompt("Please enter your name:", "Harry Potter");
        if (person == null || person == "") {
            txt = "User cancelled the prompt.";
        }
        else {
            txt = "Hello " + person + "! How are you today?";
        }
        document.getElementById("demo").innerHTML = txt;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map