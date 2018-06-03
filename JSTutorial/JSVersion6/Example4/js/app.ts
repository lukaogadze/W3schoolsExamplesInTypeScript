document.body.onload = function (): void {
    function myFunction(x: number, y: number = 10): number {
        // y is 10 if not passed or undefined
        return x + y;
    }
    document.getElementById("demo")!.innerHTML = myFunction(5).toString();
};