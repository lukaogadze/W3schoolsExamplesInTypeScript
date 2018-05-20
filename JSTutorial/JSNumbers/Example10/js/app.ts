document.body.onload = function (): void {
    const x: number = 10;
    const y: number = 20;
    const msg: string = "The result is: " + x + y;
    document.getElementById("demo")!.innerHTML = msg;
};