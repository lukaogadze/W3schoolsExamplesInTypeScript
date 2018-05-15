document.body.onload = function (): void {
    const carName1: string = "Volvo XC60";
    const carName2: string = 'Volvo XC60';

    const msg = `${carName1}<br>${carName2}`;
    document.getElementById("demo")!.innerHTML = msg;
};