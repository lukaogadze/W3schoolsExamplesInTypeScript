document.body.onload = function (): void {
    const x: String = new String("John");
    const y: String = new String("John");

    document.getElementById("demo")!.innerHTML = (x === y).toString();
};