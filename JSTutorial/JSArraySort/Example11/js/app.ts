document.body.onload = function (): void {
    const points: number[] = [40, 100, 1, 5, 25, 10];
    const demo: HTMLSpanElement = document.getElementById("demo")!;
    
    function myArrayMax(arr: number[]): number {
        let len = arr.length;
        let max = -Infinity;
        while (len--) {
            if (arr[len] > max) {
                max = arr[len];
            }
        }
        return max;
    }
    demo.innerHTML = myArrayMax(points).toString();
    
};