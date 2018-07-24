window.onload = function (): void {
    interface IPerson {
        name: string;
        today: Date;
        city: string;
    }
    const obj: IPerson = { "name": "John", "today": new Date(), "city": "New York" };
    const myJSON = JSON.stringify(obj);
    document.getElementById("demo")!.innerHTML = myJSON;
};