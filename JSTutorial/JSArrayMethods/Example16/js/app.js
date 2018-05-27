"use strict";
document.body.onload = function () {
    var myGirls = ["Cecilie", "Lone"];
    var myBoys = ["Emil", "Tobias", "Linus"];
    var myChildren = myGirls.concat(myBoys);
    document.getElementById("demo").innerHTML = myChildren.toString();
};
//# sourceMappingURL=app.js.map