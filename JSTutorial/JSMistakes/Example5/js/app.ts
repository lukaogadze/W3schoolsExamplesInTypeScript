document.body.onload = function (): void {
    let x: any = 10;
    let y: any = "10"
    document.getElementById("demo")!.innerHTML = Boolean(x === y).toString();
};