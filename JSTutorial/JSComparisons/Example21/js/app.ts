document.body.onload = function (): void {
    const x: number = 2, y: any = "John";
    document.getElementById("demo")!.innerHTML = (x > y).toString();
};