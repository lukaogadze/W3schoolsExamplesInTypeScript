window.onload = function (): void {
    const x: (a: number, b: number) => number = function(a: number, b: number): number { return a * b};
    this.document.getElementById("demo")!.innerHTML = x(4,3).toString();
};