document.body.onload = function (): void {
    const d: Date = new Date(86400000);
    document.getElementById("demo")!.innerHTML = d.toString();
};