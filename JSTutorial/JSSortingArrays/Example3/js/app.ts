document.body.onload = function (): void {
    const points: number[] = [40, 100, 1, 5, 25, 10];
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = points.toString();
    document.getElementsByTagName("button")[0].onclick = function (): void {
        points.sort(function (a:number, b: number): number {
            return a - b;
        });        
        demo.innerHTML = points.toString();        
    };
};