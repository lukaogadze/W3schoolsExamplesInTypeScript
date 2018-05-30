document.body.onload = function (): void {
    const d: Date = new Date("2015-03-25");
    document.getElementById("demo")!.innerHTML = d.toString();
};