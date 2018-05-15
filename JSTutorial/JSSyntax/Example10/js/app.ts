document.body.onload = function (): void {
    let x: number;
    x = 5;
    // x = 6; I will not be executed
    document.getElementById("demo")!.innerHTML = x.toString();
};