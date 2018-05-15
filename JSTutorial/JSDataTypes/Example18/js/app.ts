document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        age: number;
        eyeColor: string;
    }

    let person: IPerson | null = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = null;
    document.getElementById("demo")!.innerHTML = typeof person;
};