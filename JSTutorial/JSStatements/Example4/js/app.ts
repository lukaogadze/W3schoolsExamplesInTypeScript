document.body.onload = function (): void {
    let a: number, b: number, c: number;
    a = 1; b = 2; c = a + b;
    document.getElementById("demo1")!.innerHTML = c.toString();
};