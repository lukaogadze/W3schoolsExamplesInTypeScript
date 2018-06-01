document.body.onload = function (): void {
    const x: any = 5;
    document.getElementById("demo")!.innerHTML = (x !== "5").toString();
};