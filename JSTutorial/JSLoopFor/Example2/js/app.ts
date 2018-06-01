document.body.onload = function (): void {
    let text: string = "";
    for (let i = 0; i < 5; i++) {
        text += `The number is ${i}<br>`;      
    }

    document.getElementById("demo")!.innerHTML = text;
};