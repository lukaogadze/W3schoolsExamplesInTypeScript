document.body.onload = function (): void {
    const cars: string[] = ["BMW", "Volvo", "Saab", "Ford"];
    let i: number = 2;
    const len: number = cars.length;
    let text = "";

    for (; i < len; i++) {
        text += cars[i] + "<br>";
    }

    document.getElementById("demo")!.innerHTML = text;
};