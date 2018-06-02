"use strict";
// The swicth statement does not work. Try to fix it
// function checkCar() {
//     var text;
//     var favCar = document.getElementById("myInput").value;
//     switch(favCar) {
//       case "BMW":
//         text = "German car";
//       case "Ford":
//         text = "American car";
//       case "Peugeot":
//         text = "French car";
//       default:
//         text = "Unknown car name";
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