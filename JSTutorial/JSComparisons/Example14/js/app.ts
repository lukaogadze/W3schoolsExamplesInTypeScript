document.body.onload = function (): void {
    const x: number = 6, y: number = 3;
    const msg: string = `${(x < 10 && y > 1)}<br>${x < 10 && y < 1}`;
    document.getElementById("demo")!.innerHTML = msg;
};