"use strict";
window.onload = function () {
    var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    var obj = JSON.parse(text);
    obj.birth = new Date(obj.birth);
    document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
};
//# sourceMappingURL=app.js.map