document.body.onload = function (): void {
    const y: number = 123e5;
    const z: number = 123e-5;
    document.getElementById("demo")!.innerHTML = `${y}<br>${z}`;
};