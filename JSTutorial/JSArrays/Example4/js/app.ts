document.body.onload = function (): void {
    const cars: Array<string> = new Array("Saab","Volvo","BMW");
    document.getElementById("demo")!.innerHTML = cars.join(",");
};