// Use the function to display "Hello John".
document.body.onload = function (): void {
    function myFunction(name: string): string {
        return `Hello ${name}`;
    }
    document.getElementById("demo")!.innerHTML = myFunction("John");
};