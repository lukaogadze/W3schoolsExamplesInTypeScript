window.onload = function (): void {
    function myFunction(total: number, value: number) {
        return total + value;
    }
    const numbers = [4, 9, 16, 25];
    const sum = numbers.reduce(myFunction);

    document.getElementById("demo")!.innerHTML = "The sum is " + sum;    
};