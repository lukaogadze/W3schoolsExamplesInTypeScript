// The string below is broken - use escape characters to display the text correctly.
// document.getElementById("demo").innerHTML = "We are "Vikings"."; 

document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML =
    "We are \"Vikings\"";
};