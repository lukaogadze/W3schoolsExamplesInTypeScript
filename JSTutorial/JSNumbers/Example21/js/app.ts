document.body.onload = function (): void {
    const x: number = NaN;    
    document.getElementById("demo")!.innerHTML = typeof x;
};