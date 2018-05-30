document.body.onload = function (): void {
    const d: Date = new Date();
    d.setDate(d.getDate() + 50);
    document.getElementById("demo")!.innerHTML = d.toString();
};