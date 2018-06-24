window.onload = function (): void {
    const myFunction = function (a:number, b: number) {
        return a * b;
    };
    document.getElementById("demo")!.innerHTML = myFunction(4,3).toString();
};