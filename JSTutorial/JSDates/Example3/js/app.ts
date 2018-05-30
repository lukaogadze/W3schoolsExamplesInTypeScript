document.body.onload = function (): void {
    const d: Date = new Date(2018, 11, 24, 10, 33,30,0);
    document.getElementById("demo")!.innerHTML = d.toString();
};