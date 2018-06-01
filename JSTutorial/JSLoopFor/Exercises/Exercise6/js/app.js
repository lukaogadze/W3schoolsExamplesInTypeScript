"use strict";
// In this exercise, you are going to create a for loop from scratch. 
// We have already created the counter variable i for you, and a text variable for output. 
// Your task is to create a FOR LOOP that output the numbers 1 3 5 7 9 with line breaks between each number. 
// WARNING: Remember to increase the variable used in the condition to avoid infinite loops (will crash your browser).
// var text = "";
// var i;
// // add for loop here
// document.getElementById("demo").innerHTML = text;
document.body.onload = function () {
    var text = "";
    for (var i = 1; i < 10; i += 2) {
        text += i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map