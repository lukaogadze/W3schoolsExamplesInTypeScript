window.onload = function (): void {
    function myFunction(value: number): boolean {
        return value > 18;
    }

    const numbers = [4, 9, 16, 25, 29];
    const allOver18 = numbers.every(myFunction);

    document.getElementById("demo")!.innerHTML = "All over 18 is " + allOver18;
};