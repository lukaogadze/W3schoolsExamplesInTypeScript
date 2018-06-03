document.body.onload = function (): void {
    const num: any = 1;
    try {
        num.toUpperCase();
    } catch (err) {
        document.getElementById("demo")!.innerHTML = err.name;
    }
};