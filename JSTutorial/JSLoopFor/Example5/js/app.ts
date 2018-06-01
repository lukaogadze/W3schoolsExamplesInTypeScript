document.body.onload = function (): void {
    const cars: string[] = ["BMW", "Volvo", "Saab", "Ford"];
    let i: number = 0;
    const len: number = cars.length;
    let text = "";

    for (; i < len; ) {
        text += cars[i] + "<br>";
        i++;
    }

    document.getElementById("demo")!.innerHTML = text;
};