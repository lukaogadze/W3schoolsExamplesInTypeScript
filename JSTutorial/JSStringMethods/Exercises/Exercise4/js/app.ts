// Convert the value of txt to upper case.
// var txt = "Hello World";
// document.getElementById("demo").innerHTML = txt;
document.body.onload = function (): void {
    const txt: string = "Hello World";
    document.getElementById("demo")!.innerHTML = txt.toUpperCase();
};