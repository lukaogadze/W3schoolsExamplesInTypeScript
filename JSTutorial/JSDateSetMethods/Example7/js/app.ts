document.body.onload = function (): void {
    const d: Date = new Date();
    d.setMinutes(30);
    document.getElementById("demo")!.innerHTML = d.toString();
};