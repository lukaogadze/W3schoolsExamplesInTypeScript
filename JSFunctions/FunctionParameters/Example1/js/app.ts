window.onload = function (): void {
    function myFunction(x: number, y:number = 0): number {
        return x * y;
    }
    document.getElementById("demo")!.innerHTML = myFunction(4).toString();
};