"use strict";
document.body.onload = function () {
    var x = 5;
    // this isn't valid typescript code...
    //document.getElementById("demo")!.innerHTML = (x == "5");
    document.getElementById("demo").innerHTML = (x == parseInt("5")).toString();
};
//# sourceMappingURL=app.js.map