document.body.onload = function (): void {
    const x: number = 9.656;
    const result: string = `${x.toPrecision()}<br>${x.toPrecision(2)}<br>${x.toPrecision(4)}<br>${x.toPrecision(6)}`;
    document.getElementById("demo")!.innerHTML = result;
};