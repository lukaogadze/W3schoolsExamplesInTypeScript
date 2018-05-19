// Use the length property to display the length of the txt variable's value.
// var txt = "Hello World!";
// document.getElementById("demo").innerHTML = txt;

document.body.onload = function (): void {
    const txt: string = "Hello World!";
    document.getElementById("demo")!.innerHTML = txt.length.toString();
};