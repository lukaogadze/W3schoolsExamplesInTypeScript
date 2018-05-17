// Use the function to display the product of 5 * 5.
/*
function myFunction() {
    // Add code here
}
document.getElementById("demo").innerHTML = myFunction();
*/
document.body.onload = function (): void {
    function myFunction(): number {
        return 5 * 5;
    }
    document.getElementById("demo")!.innerHTML = myFunction().toString();
};