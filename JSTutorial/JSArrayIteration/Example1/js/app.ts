window.onload = function (): void {
    let txt: string = "";
    const numbers: number[] = [4, 9, 16, 25];
    function myFunction(item: number) {
        txt = txt + item + "<br>";
    }
    numbers.forEach(myFunction);
    document.getElementById("demo")!.innerHTML = txt;    
};