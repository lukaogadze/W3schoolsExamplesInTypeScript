document.body.onload = function (): void {
    const d: Date = new Date("25 Mar 2015");
    document.getElementById("demo")!.innerHTML = d.toString();
};