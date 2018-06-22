window.onload = function (): void {
    // this isn't valid ts code
    // function Person(first, last, age, eye) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.eyeColor = eye;
    //     this.nationality = "English";
    // }
    interface Person {
        nationality: string;
    }

    class Person implements Person {
        firstName: string;
        lastName: string;
        age: number;
        eyeColor: string;
        constructor(firstName: string, lastName: string, age: number, eyeColor: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.eyeColor = eyeColor;
        }
    }
    Person.prototype.nationality = "English";

    const myFather: Person = new Person("John", "Doe", 50, "blue");
    const myMother: Person = new Person("Sally", "Rally", 48, "green");

    document.getElementById("demo")!.innerHTML =
        "My father is " + myFather.nationality + ". My mother is " + myMother.nationality;
        
};