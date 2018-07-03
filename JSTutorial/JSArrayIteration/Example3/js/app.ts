window.onload = function (): void {
    const numbers: number[] = [4, 9, 16, 25];
    function myFunction(value: number): boolean {
        return value > 18;
    }
    const over18: number[] = numbers.filter(myFunction);

    document.getElementById("demo")!.innerHTML = over18.toString();    
};