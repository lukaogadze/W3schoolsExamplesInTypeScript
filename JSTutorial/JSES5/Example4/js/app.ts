window.onload = function (): void {
    const numbers1 = [4, 9, 16, 25];

    function myFunction(value: number) {
        return value * 2;
    }

    const numbers2 = numbers1.map(myFunction);
    document.getElementById("demo")!.innerHTML = numbers2.toString();
};