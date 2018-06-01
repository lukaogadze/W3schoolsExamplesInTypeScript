"use strict";
// Finish the switch statement. Add the following cases: BMW, Ford and Peugeot. 
// Set the value of the variable text to: "German car" for BMW. "American car" for Ford. "French car" for Peugeot. 
// Also add a default case where the text value is "Unknown car name".
// function checkCar() {
//     var text;
//     var favCar = document.getElementById("myInput").value;
//     switch(favCar) {
//       // add code here
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
document.body.onload = function () {
    function checkCar() {
        var text;
        var favCar = document.getElementById("myInput").value;
        switch (favCar) {
            case "BMW":
                text = "German car";
                break;
            case "Ford":
                text = "American car";
                break;
            case "Peugeot":
                text = "French car";
                break;
            default:
                text = "Unknown car name";
        }
        document.getElementById("demo").innerHTML = text;
    }
    document.getElementsByTagName("button")[0].onclick = checkCar;
};
//# sourceMappingURL=app.js.map