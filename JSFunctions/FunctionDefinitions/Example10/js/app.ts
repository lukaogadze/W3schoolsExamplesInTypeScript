window.onload = function (): void {
    function myFunction(a: number, b: number): number {
        return a * b;
    }
    document.getElementById("demo")!.innerHTML = myFunction.toString();
    
};