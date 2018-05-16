//Create an object called person with name = John, age = 50.
//Then, access the object to display "John is 50 years old".
document.body.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
    }

    const person: IPerson = {
        name:"John",
        age:50
    };
    document.getElementById("demo")!.innerHTML = `${person.name} is ${person.age} old`;
    
};