document.body.onload = function (): void {
    let myNumber: number = 2;
    let txt: string = "";
    while (myNumber != Infinity) {
        myNumber *= myNumber;
        txt+=(myNumber + "<br>");
    }
    document.getElementById("demo")!.innerHTML = txt;
};