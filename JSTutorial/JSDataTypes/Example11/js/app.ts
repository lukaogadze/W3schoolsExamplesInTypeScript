document.body.onload = function (): void {
    const cars: Array<string> = ["Saab","Volvo","BMW"];
    document.getElementById("demo")!.innerHTML = cars[0];   
};