// Inside the <script> element; change num1 to 0 and num2 to 10 and run the code.
// var i = num1;
// while (i < num2) {
//     document.getElementById("demo").innerHTML += i + "<br>";
//     i++;
// }

document.body.onload = function (): void {
    let i: number = 0;
    while (i < 10) {
        document.getElementById("demo")!.innerHTML += i + "<br>";
        i++;
    }
};