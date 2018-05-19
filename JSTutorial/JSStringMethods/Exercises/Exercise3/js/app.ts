// Use the replace() method to replace "World" with "Universe".
// var txt = "Hello World";
// document.getElementById("demo").innerHTML = txt;
document.body.onload = function (): void {
    const txt: string = "Hello World";
    document.getElementById("demo")!.innerHTML = txt.replace("World", "Universe");
};