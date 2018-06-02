document.body.onload = function (): void {
    const x: () => void = function () {};
    document.getElementById("demo")!.innerHTML =
        "Number : " + Number(x) + "<br>" +
        "String : " + String(x) + "<br>" +
        "Boolean: " + Boolean(x);
};