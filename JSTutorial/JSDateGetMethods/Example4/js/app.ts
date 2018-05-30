document.body.onload = function (): void {
    const d: Date = new Date();
    const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("demo")!.innerHTML = months[d.getMonth()];
};