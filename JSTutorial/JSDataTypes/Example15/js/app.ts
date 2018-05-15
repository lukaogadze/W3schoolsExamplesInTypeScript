document.body.onload = function (): void {
    let car: any;
    document.getElementById("demo")!.innerHTML = `${car}<br>${typeof car}`;
};