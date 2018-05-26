// Change the first item of cars to "Opel" by referring to the index number, and display the whole array.
document.body.onload = function (): void {
    const cars: string[] = ["Saab","Volvo","BMW"];
    cars[0] = "Opel";
    document.getElementById("demo")!.innerHTML = cars[0];
};