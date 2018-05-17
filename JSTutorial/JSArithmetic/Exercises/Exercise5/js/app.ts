// Find the remainder when 15 is divided by 9, using two variables x and y.
/*
var x;
var y;
*/
document.body.onload = function (): void {
    const x: number = 15, y: number = 9;
    document.getElementById("demo")!.innerHTML = (x % y).toString();
};