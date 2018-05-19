document.body.onload = function (): void {
    const carName1: string = "Volvo XC60";
    const carName2: string = 'Volvo XC60';
    document.getElementById("demo")!.innerHTML = `${carName1} ${carName2}`;
};