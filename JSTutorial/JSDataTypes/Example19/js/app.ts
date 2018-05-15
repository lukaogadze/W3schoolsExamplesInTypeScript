document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        age: number;
        eyeColor: string;
    }

    let person: IPerson | null | undefined = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = undefined;
    document.getElementById("demo")!.innerHTML = typeof person;
};