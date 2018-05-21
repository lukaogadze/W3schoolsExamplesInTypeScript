document.body.onload = function (): void {
    const x: Date = new Date("2017-09-30");    
    document.getElementById("demo")!.innerHTML = Number(x).toString();
};