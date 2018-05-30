document.body.onload = function (): void {
    const d: Date = new Date(0);
    document.getElementById("demo")!.innerHTML = d.toString();
};