document.body.onload = function (): void {
    const points: number[] = [40, 100, 1, 5, 25, 10];
    const demo: HTMLSpanElement = document.getElementById("demo")!;
    
    function myArrayMin(arr: number[]): number {
        let len = arr.length;
        let min = Infinity;
        while (len--) {
            if (arr[len] < min) {
                min = arr[len];
            }
        }
        return min;
    }
    demo.innerHTML = myArrayMin(points).toString();    
};