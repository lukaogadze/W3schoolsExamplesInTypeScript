"use strict";
// Add an onclick event attribute to <button>. Clicking the button should trigger myFunction().
window.onload = function () {
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World";
    }
    this.document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map