document.body.onload = function (): void {
    const x: string = "100";
    const y: string = "10";
    // this isn't valid ts code so it's i commented it out
    // const z: number = x / y;
    const z: number = parseInt(x) / parseInt(y);
    document.getElementById("demo")!.innerHTML = z.toString();
};