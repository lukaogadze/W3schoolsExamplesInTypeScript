document.body.onload = function (): void {
    const msg: string = `The sine value of 90 degree is ${Math.sin(90 * Math.PI / 180)}`;
    document.getElementById("demo")!.innerHTML = msg;
};