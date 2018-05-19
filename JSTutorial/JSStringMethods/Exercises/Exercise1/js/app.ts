// Display the position of the first occurrence of "World" in the variable txt.
// var txt = "Hello World";
// document.getElementById("demo").innerHTML = txt;
document.body.onload = function (): void {
    const txt: string = "Hello World";
    document.getElementById("demo")!.innerHTML = txt.indexOf("World").toString();
};