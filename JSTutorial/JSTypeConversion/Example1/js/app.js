"use strict";
document.body.onload = function () {
    var myCar = undefined;
    document.getElementById("demo").innerHTML =
        typeof "john" + "<br>" +
            typeof 3.14 + "<br>" +
            typeof NaN + "<br>" +
            typeof false + "<br>" +
            typeof [1, 2, 3, 4] + "<br>" +
            typeof { name: 'john', age: 34 } + "<br>" +
            typeof new Date() + "<br>" +
            typeof function () { } + "<br>" +
            typeof myCar + "<br>" +
            typeof null;
};
//# sourceMappingURL=app.js.map