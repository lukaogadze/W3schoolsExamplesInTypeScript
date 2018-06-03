document.body.onload = function (): void {
    const x: any = this;
    document.getElementById("demo")!.innerHTML = x.toString();
};