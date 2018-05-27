"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // this is valid javascript code but not valid typescript code...
    // document.getElementById("demo")!.innerHTML = fruits;
    document.getElementById("demo").innerHTML = fruits.toString();
};
//# sourceMappingURL=app.js.map