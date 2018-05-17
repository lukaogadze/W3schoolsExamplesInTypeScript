"use strict";
// Figure out what is wrong with the function - fix it and run it as it should!
/*
func myFunc {
    document.getElementById("demo").innerHTML = "Hello World!";
}
myFunction();
*/
document.body.onload = function () {
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World!";
    }
    myFunction();
};
//# sourceMappingURL=app.js.map