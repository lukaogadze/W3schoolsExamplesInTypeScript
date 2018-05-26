// Create an array named cars, assign the values "Saab", "Volvo" and "BMW" to it, and display it.
document.body.onload = function (): void {
    const cars: string[] = ["Saab","Volvo","BMW"];
    document.getElementById("demo")!.innerHTML = cars.join(",");
};