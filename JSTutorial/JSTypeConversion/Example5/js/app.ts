document.body.onload = function (): void {
    const d: Date = new Date();

    function isDate(myDate: any): boolean {
        return myDate.constructor.toString().indexOf("Date") > -1;
    }

    document.getElementById("demo")!.innerHTML = isDate(d).toString();
};