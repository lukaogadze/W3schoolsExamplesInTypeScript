document.body.onload = function (): void {
    let x: number = 0;
    document.getElementById("demo")!.innerHTML = Boolean(x = 0).toString();
};