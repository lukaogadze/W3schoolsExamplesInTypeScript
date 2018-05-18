"use strict";
// When the button is clicked, trigger myFunction() with an event.
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }
document.body.onload = function () {
    var btn = document.getElementsByTagName("button")[0];
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World!";
    }
    btn.onclick = myFunction;
};
//# sourceMappingURL=app.js.map