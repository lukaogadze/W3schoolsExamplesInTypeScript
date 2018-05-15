// Display the sum of 5 + 10, using two variables x and y.
document.body.onload = function (): void {
    const x: number = 5, y: number = 10;
    document.getElementById("demo")!.innerHTML = (x + y).toString();
};