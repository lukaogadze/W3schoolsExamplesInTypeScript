document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        age: number;
        eyeColor: string;
    }

    class Person implements IPerson {
        firstName: string;
        lastName: string;
        age: number;
        eyeColor:string;

        constructor(firstName: string = "", lastName: string = "", age: number = 0, eyeColor: string = ""){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.eyeColor = eyeColor;
        }

    }

    // this isn't valid typescript code    
    // var person = new Object();
    // person.firstName = "John";
    // person.lastName = "Doe";
    // person.age = 50;
    // person.eyeColor = "blue";

    const person: Person = new Person();
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue";

    document.getElementById("demo")!.innerHTML =
        person.firstName + " is " + person.age + " years old.";
};