// Create a third variable called z, assign x + y to it, and display it.
// var x = 5;
// var y = 10;
document.body.onload = function (): void {
    const x: number = 5, y: number = 10, z: number = x + y;
    document.getElementById("demo")!.innerHTML = z.toString();
};