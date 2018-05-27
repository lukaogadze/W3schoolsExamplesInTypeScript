document.body.onload = function (): void {
    const points: number[] = [40, 100, 1, 5, 25, 10];
    const demo: HTMLSpanElement = document.getElementById("demo")!;
    
    function myArrMax(arr: number[]): number {
        return Math.max.apply(null, arr);
    }
    demo.innerHTML = myArrMax(points).toString();
};