document.body.onload = function (): void {
    const x: number = 123;
    document.getElementById("demo")!.innerHTML =
    `${String(x)}<br>${String(123)}<br>${String(100 + 23)}`;
};