document.body.onload = function (): void {
    const msg: string = `The cosine value of 0 degree is ${Math.cos(0 * Math.PI / 180)}`;
    document.getElementById("demo")!.innerHTML = msg;
};