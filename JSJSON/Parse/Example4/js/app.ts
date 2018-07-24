window.onload = function (): void {
    interface IPerson {
        name: string;
        birth: string | Date;
        city: string;
    }
    const text: string = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    const obj: IPerson = JSON.parse(text);
    obj.birth = new Date((obj.birth as string));
    document.getElementById("demo")!.innerHTML = obj.name + ", " + obj.birth;
};