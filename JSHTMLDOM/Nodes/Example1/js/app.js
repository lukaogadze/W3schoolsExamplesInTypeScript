"use strict";
window.onload = function () {
    var para = document.createElement("p");
    var node = document.createTextNode("This is new");
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
};
//# sourceMappingURL=app.js.map