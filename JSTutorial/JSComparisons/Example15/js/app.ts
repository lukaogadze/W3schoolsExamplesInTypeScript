document.body.onload = function (): void {
    const x: number = 6, y: number = 3;
    document.getElementById("demo")!.innerHTML =
        (x == 5 || y == 5) + "<br>" +
        (x == 6 || y == 0) + "<br>" +
        (x == 0 || y == 3) + "<br>" +
        (x == 6 || y == 3);
};