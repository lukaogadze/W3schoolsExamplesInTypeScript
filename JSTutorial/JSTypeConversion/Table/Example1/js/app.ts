document.body.onload = function (): void {
    const x: boolean = false;
    document.getElementById("demo")!.innerHTML =
        "Number : " + Number(x) + "<br>" +
        "String : " + String(x) + "<br>" +
        "Boolean: " + Boolean(x);
};