"use strict";
window.onload = function () {
    var text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
    var obj = JSON.parse(text);
    obj.age = eval("(" + obj.age + ")");
    document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();
};
//# sourceMappingURL=app.js.map