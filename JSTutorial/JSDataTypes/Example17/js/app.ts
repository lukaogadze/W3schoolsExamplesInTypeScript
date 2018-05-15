document.body.onload = function (): void {
    let car: string = "";
    document.getElementById("demo")!.innerHTML = "The value is: " + car + "<br>" + "The type is: " + typeof car;
};