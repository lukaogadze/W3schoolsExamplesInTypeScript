document.body.onload = function (): void {
    const x: number = 123;
    document.getElementById("demo")!.innerHTML =
    `${x.toString()}<br>${(123).toString()}<br>${(100 + 23).toString()}`;
};