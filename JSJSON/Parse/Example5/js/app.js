"use strict";
window.onload = function () {
    var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    var obj = JSON.parse(text, function (key, value) {
        if (key == "birth") {
            return new Date(value);
        }
        else {
            return value;
        }
    });
    document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
};
//# sourceMappingURL=app.js.map