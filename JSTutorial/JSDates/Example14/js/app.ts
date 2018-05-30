document.body.onload = function (): void {
    const d: Date = new Date(100000000000);
    document.getElementById("demo")!.innerHTML = d.toString();
};