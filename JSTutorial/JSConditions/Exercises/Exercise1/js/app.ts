// Use the if statement to output text if 5 is greater than 2
// if () {
//     document.getElementById("demo").innerHTML = "Well done!";
// }

document.body.onload = function (): void {
    const x: number = 5, y: number = 2;
    if (x > y) {
        document.getElementById("demo")!.innerHTML = "Well done!";
    }
};