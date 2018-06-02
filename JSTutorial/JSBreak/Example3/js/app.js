"use strict";
document.body.onload = function () {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var text = "";
    // this isn't valid typescript code....
    // list: {
    //     text += cars[0] + "<br>";
    //     text += cars[1] + "<br>";
    //     text += cars[2] + "<br>";
    //     break list;
    //     text += cars[3] + "<br>";
    //     text += cars[4] + "<br>";
    //     text += cars[5] + "<br>";
    // }
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    text += cars[2] + "<br>";
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map