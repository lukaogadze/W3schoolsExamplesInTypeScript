document.body.onload = function (): void {
    let x: number, y: number;
    x = 5 + 6;
    y = x * 10;
    document.getElementById("demo")!.innerHTML = y.toString();
};