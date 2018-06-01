document.body.onload = function (): void {
    const x: number = 6, y: number = 3;
    document.getElementById("demo")!.innerHTML =
    `${!(x === y)}<br>${!(x > y)}`;
};