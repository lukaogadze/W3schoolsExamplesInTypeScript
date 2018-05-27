"use strict";
// Use the concat() method to concatenate girls and boys.
document.body.onload = function () {
    var girls = ["Cecilie", "Lone"];
    var boys = ["Emil", "Tobias", "Linus"];
    var children = girls.concat(boys);
    document.getElementById("demo").innerHTML = children.toString();
};
//# sourceMappingURL=app.js.map