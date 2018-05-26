document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        age: number;
    }
    const person: IPerson = {
        firstName:"John",
        lastName:"Doe",
        age:46
    };
    document.getElementById("demo")!.innerHTML = person["firstName"];
};