"use strict";
window.onload = function () {
    var x = document.getElementById("myBtn");
    function myFunction() {
        document.getElementById("demo").innerHTML += "Moused over!<br>";
    }
    function mySecondFunction() {
        document.getElementById("demo").innerHTML += "Clicked!<br>";
    }
    function myThirdFunction() {
        document.getElementById("demo").innerHTML += "Moused out!<br>";
    }
    x.addEventListener("mouseover", myFunction);
    x.addEventListener("click", mySecondFunction);
    x.addEventListener("mouseout", myThirdFunction);
};
//# sourceMappingURL=app.js.map