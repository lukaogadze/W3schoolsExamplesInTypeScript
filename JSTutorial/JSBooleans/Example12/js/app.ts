document.body.onload = function (): void {
    const x: boolean = false;
    const y: Boolean = new Boolean(false);
    document.getElementById("demo")!.innerHTML = (x == y).toString();
};