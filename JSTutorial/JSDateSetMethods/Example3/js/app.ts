document.body.onload = function (): void {
    const d: Date = new Date();
    d.setMonth(11);
    document.getElementById("demo")!.innerHTML = d.toString();
};