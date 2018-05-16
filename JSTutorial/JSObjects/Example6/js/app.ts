document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        id: number
    }
    const person: IPerson = {
        firstName:"John",
        lastName:"Doe",
        id:5566
    };

    document.getElementById("demo")!.innerHTML = `${person["firstName"]} ${person["lastName"]}`;
};