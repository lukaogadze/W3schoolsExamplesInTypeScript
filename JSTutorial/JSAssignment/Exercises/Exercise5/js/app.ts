// Use the %= operator to assign a remainder of 10 / 3 to the variable x.
/*
var x = 10;
// add code here
document.getElementById("demo").innerHTML = x;
*/
document.body.onload = function (): void {
    let x: number = 10;
    x %= 3;
    document.getElementById("demo")!.innerHTML = x.toString();
};