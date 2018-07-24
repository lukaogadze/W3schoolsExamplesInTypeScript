window.onload = function (): void {
    interface IPerson {
        name: string;
        age: () => number;
        city: string;
    }
    const text: string = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
    const obj: IPerson = JSON.parse(text);
    obj.age = eval("(" + obj.age + ")");
    document.getElementById("demo")!.innerHTML = obj.name + ", " + obj.age();
    
};