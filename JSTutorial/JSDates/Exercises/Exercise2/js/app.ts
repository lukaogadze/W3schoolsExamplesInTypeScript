// Create a Date object with the following value: "January 10, 2015 10:00:00".
document.body.onload = function (): void {
    const date: Date = new Date("January 10, 2015 10:00:00");
    document.getElementById("demo")!.innerHTML = date.toString();
};