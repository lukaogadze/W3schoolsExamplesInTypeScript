// Make the loop start counting from 5 instead of 0:
// var i = 0;
// while (i < 10) {
//     document.getElementById("demo").innerHTML += i + "<br>";
//     i++;
// }

document.body.onload = function (): void {
    let i: number = 5;
    while (i < 10) {
        document.getElementById("demo")!.innerHTML += i + "<br>";
        i++;
    }
};