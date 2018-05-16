// Define a function named "myFunction", and make it display "Hello World!" in the <p> element.
document.body.onload = function (): void {
    function myFunction(): void {
        document.getElementById("demo")!.innerHTML = "Hello World!";
    }
    myFunction();
};