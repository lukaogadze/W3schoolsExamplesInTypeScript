// Use the -= operator to subtract a value of 5 from the variable x.
/*
var x = 10;
// add code here
document.getElementById("demo").innerHTML = x;
*/
document.body.onload = function (): void {
    let x: number = 10;
    x -= 5;
    document.getElementById("demo")!.innerHTML = x.toString();
};