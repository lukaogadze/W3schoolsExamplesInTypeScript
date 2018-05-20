document.body.onload = function (): void {
    // this isn't valid ts code so it's commented out
    // const x: number = 100 / "Apple";
    const x: number = NaN;
    document.getElementById("demo")!.innerHTML = isNaN(x).toString();
};