document.body.onload = function (): void {
    const cars: string[] = ["BMW", "Volvo", "Saab", "Ford"];
    let i: number = 0;
    let text: string = "";
    for(;cars[i];){
        text += cars[i] + "<br>";
        i++;
    }
    document.getElementById("demo")!.innerHTML = text;
};