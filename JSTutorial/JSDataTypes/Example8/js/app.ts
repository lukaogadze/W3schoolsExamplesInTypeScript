document.body.onload = function (): void {
    const x1: number = 34.00;
    const x2: number = 34;
    const x3: number = 3.14;
    const msg: string = `${x1}<br>${x2}<br>${x3}`;
    document.getElementById("demo")!.innerHTML = msg;
};