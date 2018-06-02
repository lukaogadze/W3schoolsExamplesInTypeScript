document.body.onload = function (): void {
    const fruits: string[] = [
        "Banana",
        "Orange",
        "Apple",
        "Mango"
    ];


    function isArray(myArray: any): boolean {
        return myArray.constructor === Array;
    }

    document.getElementById("demo")!.innerHTML = isArray(fruits).toString();
};