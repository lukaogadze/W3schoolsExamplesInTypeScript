window.onload = function (): void {
    const arr: number[] = [1,2,3,4,5,6,7];
    const max: number = Math.max.apply(Math, arr);
    document.getElementById("demo")!.innerHTML = max.toString();
};