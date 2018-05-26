document.body.onload = function (): void {
    //var points = new Array(40, 100, 1, 5, 25, 10);
    const points: number[] = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo")!.innerHTML = points[0].toString();
};