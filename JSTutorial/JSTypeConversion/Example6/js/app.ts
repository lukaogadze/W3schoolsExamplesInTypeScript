document.body.onload = function (): void {
    const myDate: Date = new Date();

    function isDate(myDate: any): boolean {
        return myDate.constructor === Date;
    }

    document.getElementById("demo")!.innerHTML = isDate(myDate).toString();
};