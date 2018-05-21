document.body.onload = function (): void {
    const x: number = 123;
    document.getElementById("demo")!.innerHTML =
    `${x.valueOf()}<br>${(123).valueOf()}<br>${(100 + 23).valueOf()}`;
};