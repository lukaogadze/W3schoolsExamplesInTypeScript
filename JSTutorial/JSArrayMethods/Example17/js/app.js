"use strict";
document.body.onload = function () {
    var arr1 = ["Cecilie", "Lone"];
    var arr2 = ["Emil", "Tobias", "Linus"];
    var arr3 = ["Robin", "Morgan"];
    var myChildren = arr1.concat(arr2, arr3);
    document.getElementById("demo").innerHTML = myChildren.toString();
};
//# sourceMappingURL=app.js.map