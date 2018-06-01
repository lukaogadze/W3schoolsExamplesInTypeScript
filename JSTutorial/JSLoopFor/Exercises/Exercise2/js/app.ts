// Make the loop start counting from 5 instead of 0:
// var i;
// for (i = 0; i < 10; i++) {
//     document.getElementById("demo").innerHTML += i + "<br>";
// }

document.body.onload = function (): void {
    for (let i = 5; i < 10; i++) {
        document.getElementById("demo")!.innerHTML += i + "<br>";
    }
};