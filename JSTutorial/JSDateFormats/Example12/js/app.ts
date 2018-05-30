document.body.onload = function (): void {
    const msec: number = Date.parse("March 21, 2012");
    document.getElementById("demo")!.innerHTML = msec.toString();
};