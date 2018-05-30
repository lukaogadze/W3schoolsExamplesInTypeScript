document.body.onload = function (): void {
    const d: Date = new Date("October 13, 2014 11:13:00");
    document.getElementById("demo")!.innerHTML = d.toString();
};