/*
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World!";
}
// Call the function here
*/
// Call the function
document.body.onload = function (): void {
    function myFunction(): void {
        document.getElementById("demo")!.innerHTML = "Hello World!";
    }
    myFunction();
};