document.body.onload = function (): void {
    const x: number = 9.656;
    const result: string = `${x.toExponential()}<br>${x.toExponential(2)}<br>${x.toExponential(4)}<br>${x.toExponential(6)}`;
    document.getElementById("demo")!.innerHTML = result;
};