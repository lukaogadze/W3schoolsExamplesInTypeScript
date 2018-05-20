document.body.onload = function (): void {
    const x: number = 0.2 + 0.1;
    document.getElementById("demo1")!.innerHTML = "0.2 + 0.1 = " + x;
    const y: number = (0.2 * 10 + 0.1 * 10) / 10;
    document.getElementById("demo2")!.innerHTML = "0.2 + 0.1 = " + y;
};