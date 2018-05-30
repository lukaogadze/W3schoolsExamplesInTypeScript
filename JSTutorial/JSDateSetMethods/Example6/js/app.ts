document.body.onload = function (): void {
    const d: Date = new Date();
    d.setHours(22);
    document.getElementById("demo")!.innerHTML = d.toString();
};