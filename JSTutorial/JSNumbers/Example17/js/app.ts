document.body.onload = function (): void {
    // this isn't valid ts code so it's commented out
    //const result: number = 100 / "10";
    const result: number = 100 / parseInt("10");
    document.getElementById("demo")!.innerHTML = result.toString();
};