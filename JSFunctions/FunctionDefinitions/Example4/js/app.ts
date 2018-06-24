window.onload = function (): void {
    const myFunction: Function =
        new Function("a","b","return a * b");
    const x: number = myFunction(4,3);
    this.document.getElementById("demo")!.innerHTML = x.toString();
};