document.body.onload = function (): void {
    let text: string = "";    
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("demo")!.innerHTML = text;
    
};