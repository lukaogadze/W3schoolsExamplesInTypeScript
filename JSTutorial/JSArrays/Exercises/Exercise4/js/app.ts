// Use the length property to display the number of array items in cars.
document.body.onload = function (): void {
    const cars: string[] = ["Saab","Volvo","BMW"];
    document.getElementById("demo")!.innerHTML = cars.length.toString();
};