window.onload = function (): void {
    const numbers1: number[] = [4, 9, 16, 25];
    const numbers2: number[] = numbers1.map(myFunction);

    document.getElementById("demo")!.innerHTML = numbers2.toString();

    function myFunction(value: number) {
        return value * 2;
    }
};