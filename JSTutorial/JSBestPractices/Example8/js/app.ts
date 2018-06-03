document.body.onload = function (): void {
    function myFunction(x: number, y?: number): number {
        if (y === undefined) {
            y = 0;
        }
        return x * y;
    }
    document.getElementById("demo")!.innerHTML = myFunction(4).toString();
};