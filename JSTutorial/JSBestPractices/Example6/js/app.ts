document.body.onload = function (): void {
    const x: any = "Hello";
    const y: any = "Dolly";
    document.getElementById("demo")!.innerHTML = (x - y).toString();
};