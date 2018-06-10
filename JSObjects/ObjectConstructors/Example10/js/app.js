"use strict";
document.body.onload = function () {
    var x1 = {}; // object
    var x2 = ""; // string 
    var x3 = 0; // number
    var x4 = false; // boolean
    var x5 = []; // object (not array)
    var x6 = /()/; // object
    var x7 = function () { }; // function
    // Display the type of all
    document.getElementById("demo").innerHTML =
        "x1: " + typeof x1 + "<br>" +
            "x2: " + typeof x2 + "<br>" +
            "x3: " + typeof x3 + "<br>" +
            "x4: " + typeof x4 + "<br>" +
            "x5: " + typeof x5 + "<br>" +
            "x6: " + typeof x6 + "<br>" +
            "x7: " + typeof x7 + "<br>";
};
//# sourceMappingURL=app.js.map