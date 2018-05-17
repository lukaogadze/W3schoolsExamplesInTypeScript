// Use the function to display "Hello John".
/*
function myFunction(name) {
    return "Hello " + name;
}
*/
document.body.onload = function (): void {
    function myFunction(name: string): string {
        return `Hello ${name}`;
    }
    document.getElementById("demo")!.innerHTML = myFunction("John");
};