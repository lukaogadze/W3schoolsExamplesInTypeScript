// Use the break statement to stop the loop at 5.
// var text = "";
// var i;
// for (i = 1; i < 10; i++) {
//     document.getElementById("demo").innerHTML += i + "<br>";
// }

document.body.onload = function (): void {    
    for (let i = 1; i < 10; i++) {
        if (i === 5) {
            break;
        }
        document.getElementById("demo")!.innerHTML += i + "<br>";
    }
};