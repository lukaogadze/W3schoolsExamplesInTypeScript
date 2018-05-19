// Convert the value of txt to lower case.
// var txt = "Hello World";
// document.getElementById("demo").innerHTML = txt;
document.body.onload = function (): void {
    const txt: string = "Hello World";
    document.getElementById("demo")!.innerHTML = txt.toLowerCase();
};