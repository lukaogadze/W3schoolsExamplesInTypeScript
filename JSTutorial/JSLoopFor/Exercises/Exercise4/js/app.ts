// Make the loop start counting downwards from 10 and stop at 1.

// The output should be 10 9 8 7 6 5 4 3 2 1 with line breaks.
// var i;
// for (i = 0; i < 10; i++) {
//     document.getElementById("demo").innerHTML += i + "<br>";
// }

document.body.onload = function (): void {
    for (let i = 10; i > 0 ; i--) {
        document.getElementById("demo")!.innerHTML += i + "<br>";
    }
};