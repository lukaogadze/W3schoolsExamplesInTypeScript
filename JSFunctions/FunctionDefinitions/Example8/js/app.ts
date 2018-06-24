window.onload = function (): void {
    const x: number = myFunction(4, 3) * 2;
    function myFunction(a: number, b: number): number {
        return a * b;
    }    
    document.getElementById("demo")!.innerHTML = x.toString();
};