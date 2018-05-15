// Use the *= operator to multiply the variable x with 5.
document.body.onload = function (): void {
    let x: number = 10;
    x *= 5;
    document.getElementById("demo")!.innerHTML = x.toString();
};