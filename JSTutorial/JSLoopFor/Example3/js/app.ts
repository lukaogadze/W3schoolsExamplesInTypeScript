document.body.onload = function (): void {
    const cars: string[] = ["BMW", "Volvo", "Saab", "Ford"];
    let text: string = ""
    for (let i = 0, len = cars.length; i < len; i++) {
        text += cars[i] + "<br>";
    }

    document.getElementById("demo")!.innerHTML = text;
};