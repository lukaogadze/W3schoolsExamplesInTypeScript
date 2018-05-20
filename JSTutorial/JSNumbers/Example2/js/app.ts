document.body.onload = function (): void {
    const x: number = 123e5;
    const y: number = 123e-5;
    document.getElementById("demo")!.innerHTML = x + "<br>" + y;    
};