document.body.onload = function (): void {    
    const x: any = "Hello";
    const y: any = "10";
    document.getElementById("demo")!.innerHTML =
        isNaN(x) + "<br>" + isNaN(y);    
};