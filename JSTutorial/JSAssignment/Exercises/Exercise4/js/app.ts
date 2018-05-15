// Use the /= operator to divide the variable x with 5.
document.body.onload = function (): void {
    let x: number = 10;
    x /= 5;
    document.getElementById("demo")!.innerHTML = x.toString();
};