"use strict";
window.onload = function () {
    // this isn't valid ts code
    // function myFunction(arg1, arg2) {
    //     this.firstName = arg1;
    //     this.lastName  = arg2;
    // }
    var myFunction = /** @class */ (function () {
        function myFunction(arg1, arg2) {
            this.firstName = arg1;
            this.lastName = arg2;
        }
        return myFunction;
    }());
    var x = new myFunction("John", "Doe");
    document.getElementById("demo").innerHTML = x.firstName;
};
//# sourceMappingURL=app.js.map