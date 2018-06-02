document.body.onload = function (): void {
    const fruits: string[] = [
        "Banana",
        "Orange",
        "Apple",
        "Mango"
    ];


    function isArray(myArray: any): boolean {
        return myArray.constructor.toString().indexOf("Array") > - 1;
    }

    document.getElementById("demo")!.innerHTML = isArray(fruits).toString();
};