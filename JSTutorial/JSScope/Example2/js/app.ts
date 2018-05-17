document.body.onload = function (): void {
    const carName: string = "Volvo";

    function myFunction(): void {
        document.getElementById("demo")!.innerHTML = `I can display ${carName}`;
    }
    myFunction();
};