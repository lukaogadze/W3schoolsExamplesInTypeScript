document.body.onload = function (): void {
    const d: Date = new Date();
    d.setFullYear(2020);
    document.getElementById("demo")!.innerHTML = d.toString();
};