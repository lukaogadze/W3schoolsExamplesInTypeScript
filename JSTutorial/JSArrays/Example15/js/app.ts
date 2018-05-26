document.body.onload = function (): void {
    interface INameToValueMap {
        [key: string]: any;
    }
    const person: INameToValueMap = {};
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    document.getElementById("demo")!.innerHTML = person[0] + " " + person.length;    
};