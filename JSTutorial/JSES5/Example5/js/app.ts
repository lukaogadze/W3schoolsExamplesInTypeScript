window.onload = function (): void {
    function myFunction(value: number) {
        return value > 18;
    }
    const numbers = [4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);

    document.getElementById("demo")!.innerHTML = over18.toString();
};