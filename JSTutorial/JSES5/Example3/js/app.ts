window.onload = function (): void {
    let txt = "";
    const numbers = [4, 9, 16, 25];
    numbers.forEach(myFunction);
    document.getElementById("demo")!.innerHTML = txt;

    function myFunction(item: number) {
        txt = txt + item + "<br>";
    }
};