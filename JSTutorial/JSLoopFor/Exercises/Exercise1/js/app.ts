// In the for loop, change num1 to 0 and num2 to 10 and run the code.
// var i;
// for (i = num1; i < num2; i++) {
//     document.getElementById("demo").innerHTML += i + "<br>";
// }

document.body.onload = function (): void {
    for (let i = 0; i < 10; i++) {
        document.getElementById("demo")!.innerHTML += i + "<br>";
    }
};