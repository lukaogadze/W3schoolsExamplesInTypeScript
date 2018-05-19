// Assign the string "Hello World!" to the variable txt.
// var txt;
// document.getElementById("demo").innerHTML = txt;

document.body.onload = function (): void {
    const txt: string = "Hello World!";
    document.getElementById("demo")!.innerHTML = txt;
};