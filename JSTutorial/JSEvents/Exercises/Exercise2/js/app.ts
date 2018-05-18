// When the button is clicked, trigger myFunction() with an event.
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }
document.body.onload = function (): void {
    const btn: HTMLButtonElement = document.getElementsByTagName("button")[0];
    function myFunction(): void {
        document.getElementById("demo")!.innerHTML = "Hello World!";
    }
    btn.onclick = myFunction;
    
};