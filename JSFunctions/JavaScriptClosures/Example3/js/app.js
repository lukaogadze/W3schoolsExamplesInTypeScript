"use strict";
window.onload = function () {
    // Initiate counter
    var counter = 0;
    // Function to increment counter
    function add() {
        counter += 1;
    }
    // Call add() 3 times
    add();
    add();
    add();
    // The counter should now be 3
    document.getElementById("demo").innerHTML = "The counter is: " + counter;
};
//# sourceMappingURL=app.js.map