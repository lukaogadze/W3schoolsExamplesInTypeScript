document.body.onload = function (): void {
    const x: number = 2/0;
    const y: number = -2/0;
    document.getElementById("demo")!.innerHTML =
    `${x}<br>${y}`;
};