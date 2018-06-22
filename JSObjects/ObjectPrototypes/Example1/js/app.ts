window.onload = function (): void {
    // this isn't valid ts code
    // function Person(first, last, age, eye) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.eyeColor = eye;
    // }

    class Person {
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
    
    const myFather: Person = new Person("John", "Doe", 50, "blue");
    const myMother: Person = new Person("Sally", "Rally", 48, "green");
    
    document.getElementById("demo")!.innerHTML =
    "My father is " + myFather.age + ". My mother is " + myMother.age; 
    
};