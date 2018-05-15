document.body.onload = function (): void {
    let car: string | undefined = "Volvo";
    car = undefined;
    document.getElementById("demo")!.innerHTML = `${car}<br>${typeof car}`;
};