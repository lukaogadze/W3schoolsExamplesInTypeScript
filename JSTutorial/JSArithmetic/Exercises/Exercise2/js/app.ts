// Display the difference of 10 - 5, using two variables x and y.
document.body.onload = function (): void {
    const x: number = 10, y: number = 5;
    document.getElementById("demo")!.innerHTML = (x - y).toString();
};