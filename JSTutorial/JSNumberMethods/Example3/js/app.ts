document.body.onload = function (): void {
    const x: number = 9.656;
    const result: string = `${x.toFixed()}<br>${x.toFixed(2)}<br>${x.toFixed(4)}<br>${x.toFixed(6)}`;
    document.getElementById("demo")!.innerHTML = result;
};