document.body.onload = function (): void {
    const d: Date = new Date(2018);
    document.getElementById("demo")!.innerHTML = d.toString();
};