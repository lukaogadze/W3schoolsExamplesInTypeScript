window.onload = function (): void {
    function myFunction(a: number, b: number): number {
        console.log(a,b);
        return arguments.length;
    }    
    document.getElementById("demo")!.innerHTML = myFunction(3,4).toString();
};