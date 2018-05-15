document.body.onload = function (): void {
    const x: number = 5;
    const y: number = 5;
    const z: number = 6;
    const msg1: boolean = x == y;
    const msg2: boolean = x == z;
    document.getElementById("demo")!.innerHTML = `${msg1}<br>${msg2}`;    
};