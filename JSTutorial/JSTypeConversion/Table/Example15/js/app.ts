document.body.onload = function (): void {
    const x: number[] = [20];
    document.getElementById("demo")!.innerHTML =
        "Number : " + Number(x) + "<br>" +
        "String : " + String(x) + "<br>" +
        "Boolean: " + Boolean(x);
};