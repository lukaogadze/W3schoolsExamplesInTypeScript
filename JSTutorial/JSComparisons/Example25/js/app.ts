document.body.onload = function (): void {
    const x: any = "2", y: any = "12";    
    document.getElementById("demo")!.innerHTML = (x == y).toString();
};