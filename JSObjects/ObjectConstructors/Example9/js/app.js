"use strict";
document.body.onload = function () {
    var x1 = new Object(); // A new Object object
    var x2 = new String(); // A new String object
    var x3 = new Number(); // A new Number object
    var x4 = new Boolean(); // A new Boolean object
    var x5 = new Array(); // A new Array object
    var x6 = new RegExp("sudo"); // A new RegExp object
    var x7 = new Function(); // A new Function object
    var x8 = new Date(); // A new Date object
    // Display the type of all objects
    document.getElementById("demo").innerHTML =
        "x1: " + typeof x1 + "<br>" +
            "x2: " + typeof x2 + "<br>" +
            "x3: " + typeof x3 + "<br>" +
            "x4: " + typeof x4 + "<br>" +
            "x5: " + typeof x5 + "<br>" +
            "x6: " + typeof x6 + "<br>" +
            "x7: " + typeof x7 + "<br>" +
            "x8: " + typeof x8 + "<br>";
};
//# sourceMappingURL=app.js.map