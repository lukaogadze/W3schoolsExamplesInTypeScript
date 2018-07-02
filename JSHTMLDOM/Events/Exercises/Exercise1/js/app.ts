// Add an onclick event attribute to <button>. Clicking the button should trigger myFunction().
window.onload = function (): void {
    function myFunction(): void {
        document.getElementById("demo")!.innerHTML = "Hello World";
    }
    this.document.getElementsByTagName("button")[0].onclick = myFunction;
};