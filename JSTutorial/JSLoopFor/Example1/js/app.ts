document.body.onload = function (): void {
    const cars: string[] = [
        "BMW",
        "Volvo",
        "Saab",
        "Ford",
        "Fiat",
        "Audi"
    ];

    let text: string = "";
    for (let i = 0; i < cars.length; i++) {
        text += `${cars[i]}<br>`;
    }

    document.getElementById("demo")!.innerHTML = text;
};