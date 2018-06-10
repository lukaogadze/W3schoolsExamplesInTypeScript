document.body.onload = function (): void {

    type IPerson =  {
        firstname: string;
        lastname: string;
        age: number;
        eyecolor: string;        
    };

    const person: IPerson = {
        firstname: "John",
        lastname: "Doe",
        age: 50,
        eyecolor: "blue"
    };

    document.getElementById("demo")!.innerHTML =
        person["firstname"] + " is " + person["age"] + " years old.";
};