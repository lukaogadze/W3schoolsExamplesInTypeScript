document.body.onload = function (): void {
    const msec: number = Date.parse("March 21, 2012");
    const d: Date = new Date(msec);
    document.getElementById("demo")!.innerHTML = d.toString();
};