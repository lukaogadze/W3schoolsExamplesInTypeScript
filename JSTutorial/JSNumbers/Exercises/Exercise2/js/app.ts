// The value of z should be 11. Find out what's wrong and fix it.
// var x = 5;
// var y = "6";
// var z = x + y;
// document.getElementById("demo").innerHTML = z;
document.body.onload = function (): void {
    const x: number = 5;
    const y: number = 6;
    const z: number = x + y;
    document.getElementById("demo")!.innerHTML = z.toString();
};