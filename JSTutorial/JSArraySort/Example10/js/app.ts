document.body.onload = function (): void {
    const points: number[] = [40, 100, 1, 5, 25, 10];
    const demo: HTMLSpanElement = document.getElementById("demo")!;
    
    function myArrMin(arr: number[]): number {
        return Math.min.apply(null, arr);
    }
    demo.innerHTML = myArrMin(points).toString();
};