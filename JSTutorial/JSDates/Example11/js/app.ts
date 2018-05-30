document.body.onload = function (): void {
    const d: Date = new Date(9, 11, 24);
    document.getElementById("demo")!.innerHTML = d.toString();
};