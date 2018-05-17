"use strict";
// Use the function to display "Hello John".
/*
function myFunction(name) {
    return "Hello " + name;
}
*/
document.body.onload = function () {
    function myFunction(name) {
        return "Hello " + name;
    }
    document.getElementById("demo").innerHTML = myFunction("John");
};
//# sourceMappingURL=app.js.map