document.body.onload = function (): void {
    const d: Date = new Date();
    const days: string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("demo")!.innerHTML = days[d.getDay()];
};