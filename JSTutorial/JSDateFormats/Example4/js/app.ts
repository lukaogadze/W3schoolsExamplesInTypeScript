document.body.onload = function (): void {
    const d: Date = new Date("2015-03-25T12:00:00Z");
    document.getElementById("demo")!.innerHTML = d.toString();
};