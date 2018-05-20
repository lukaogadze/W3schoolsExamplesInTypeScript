document.body.onload = function (): void {
    // this isn't valid ts code so it's commented out
    //const result: number = 100 / "apple";
    const result: number = NaN;
    document.getElementById("demo")!.innerHTML = result.toString();
};