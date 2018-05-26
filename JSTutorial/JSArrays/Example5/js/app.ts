document.body.onload = function (): void {
    const cars: string[] = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo")!.innerHTML = cars[0];
};