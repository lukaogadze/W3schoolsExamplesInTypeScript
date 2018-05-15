document.body.onload = function (): void {
    let x: number, y: number;
    x = 5;
    y = 6;
    document.getElementById("demo")!.innerHTML = (x + y).toString();
};