document.body.onload = function (): void {
    let text: string = "";
    let i = 0;
    while (i < 10) {
        text += `<br>The number is ${i}`;
        i++;
    }
    document.getElementById("demo")!.innerHTML = text;
};