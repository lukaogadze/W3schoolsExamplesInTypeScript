"use strict";
window.onload = function () {
    var txt = '{"name":"John", "age":30, "city":"New York"}';
    var obj = JSON.parse(txt);
    document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
};
//# sourceMappingURL=app.js.map