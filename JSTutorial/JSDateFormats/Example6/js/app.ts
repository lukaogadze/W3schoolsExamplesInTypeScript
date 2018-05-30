document.body.onload = function (): void {
    const d: Date = new Date("03/25/2015");
    document.getElementById("demo")!.innerHTML = d.toString();
};