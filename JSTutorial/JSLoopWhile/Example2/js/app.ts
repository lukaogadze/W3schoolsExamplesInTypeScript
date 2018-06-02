document.body.onload = function (): void {
    let text: string = "";
    let i = 0;

    do {
        text += `<br>The number is ${i}`;
        i++;
    }while(i < 10);

    document.getElementById("demo")!.innerHTML = text;
};