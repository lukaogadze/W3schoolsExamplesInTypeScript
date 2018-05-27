document.body.onload = function (): void {
    const points: number[] = [40, 100, 1, 5, 25, 10];
    const demo: HTMLSpanElement = document.getElementById("demo")!;

    points.sort((a: number, b: number) => b - a);
    demo.innerHTML = points[0].toString();
};