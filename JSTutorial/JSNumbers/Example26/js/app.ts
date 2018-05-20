document.body.onload = function (): void {
    const myNumber: number = 128;
    const myNumberHex: string = myNumber.toString(16);
    const myNumberOct: string = myNumber.toString(8);
    const myNumberBin: string = myNumber.toString(2);
    const msg: string = `128 = ${myNumber} Decimal<br>${myNumberHex} Hexadecimal<br>${myNumberOct} Octal<br>${myNumberBin} Binary`;
    document.getElementById("demo")!.innerHTML = msg;
};