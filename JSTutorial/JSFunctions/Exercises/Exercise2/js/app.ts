// Figure out what is wrong with the function - fix it and run it as it should!
document.body.onload = function (): void {
    function myFunction(): void {
        document.getElementById("demo")!.innerHTML = "Hello World!";
    }
    myFunction();
};