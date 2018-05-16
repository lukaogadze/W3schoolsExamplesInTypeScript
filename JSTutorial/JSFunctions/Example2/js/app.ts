document.body.onload = function (): void {
    function myFunction(a: number, b: number): number {
        return a * b;
    }
    const x: number = myFunction(4,3);
    document.getElementById("demo")!.innerHTML = x.toString();
};