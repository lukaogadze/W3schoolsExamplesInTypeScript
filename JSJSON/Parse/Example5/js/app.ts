window.onload = function (): void {
    interface IPerson {
        name: string;
        birth: string | Date;
        city: string;
    }
    const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    const obj: IPerson = JSON.parse(text, function (key: string, value: string): Date | string {
        if (key == "birth") {
            return new Date(value);
        } else {
            return value;
        }
    });
    document.getElementById("demo")!.innerHTML = obj.name + ", " + obj.birth;
};