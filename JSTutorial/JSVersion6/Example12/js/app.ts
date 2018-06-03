document.body.onload = function (): void {
    const x: (a: number, b: number) => number =
        (x: number, y: number) => x * y;

    document.getElementById("demo")!.innerHTML = x(5, 5).toString();
};