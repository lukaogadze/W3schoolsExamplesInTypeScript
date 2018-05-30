document.body.onload = function (): void {
    const d: Date = new Date();
    document.getElementById("demo")!.innerHTML = d.getSeconds().toString();
};