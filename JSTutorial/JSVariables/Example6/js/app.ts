document.body.onload = function (): void {
    const person: string = "John Doe",
        carName: string = "Volvo",
        price: number = 200;
    document.getElementById("demo")!.innerHTML = carName;
    console.log(person, price);
};