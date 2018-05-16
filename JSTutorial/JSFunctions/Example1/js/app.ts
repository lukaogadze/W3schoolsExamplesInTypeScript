document.body.onload = function (): void {
    function myFunction(p1: any, p2: any): any {
        return p1 * p2;
    }
    document.getElementById("demo")!.innerHTML = myFunction(3, 4);
};