"use strict";
window.onload = function () {
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);
    parent.replaceChild(para, child);
};
//# sourceMappingURL=app.js.map