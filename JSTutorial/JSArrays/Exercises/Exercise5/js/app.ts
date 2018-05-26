//Use the length property to add a new item to cars: Mercedes.
document.body.onload = function (): void {
    const cars: string[] = ["Saab","Volvo","BMW"];
    cars[cars.length] = "Mercedes";
    document.getElementById("demo")!.innerHTML = cars.join(",");
};