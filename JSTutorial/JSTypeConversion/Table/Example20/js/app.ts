document.body.onload = function (): void {
    const x: object = {};
        
    document.getElementById("demo")!.innerHTML =
        "Number : " + Number(x) + "<br>" +
        "String : " + String(x) + "<br>" +
        "Boolean: " + Boolean(x);
};