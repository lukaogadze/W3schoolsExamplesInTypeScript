"use strict";
// Use a conditional (ternary) operator for this exercise:
// If the variable firstName is equal to "John", the value of the variable result should be "Hello John!",
// otherwise the value of result should be "You're not John!".
// function checkName() {
//     var firstName = document.getElementById("fname").value;
//     var result = // add code here
//     document.getElementById("demo").innerHTML = result;
// }
document.body.onload = function () {
    function checkName() {
        var firstName = document.getElementById("fname").value;
        var result = firstName === "John" ? "Hello John!" : "You're not John!";
        document.getElementById("demo").innerHTML = result;
    }
    document.getElementsByTagName("button")[0].onclick = checkName;
};
//# sourceMappingURL=app.js.map