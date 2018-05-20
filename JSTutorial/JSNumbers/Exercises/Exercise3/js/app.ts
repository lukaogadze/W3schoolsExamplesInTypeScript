// Divide x by 3
// var x = 50;
// document.getElementById("demo").innerHTML = x;
document.body.onload = function (): void {
    const x: number = 50;
    const y: number = 3;
    document.getElementById("demo")!.innerHTML = (x / y).toString();
};