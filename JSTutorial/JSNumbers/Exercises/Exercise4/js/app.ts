// Display the product of 8 * 5, using two variables x and y.
document.body.onload = function (): void {
    const x: number = 8;
    const y: number = 5;
    document.getElementById("demo")!.innerHTML = (x * y).toString();
};