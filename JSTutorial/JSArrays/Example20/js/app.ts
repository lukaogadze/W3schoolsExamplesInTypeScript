document.body.onload = function (): void {
    function isArray(myArray: any): boolean {
        return myArray.constructor.toString().indexOf("Array") > - 1;
    }
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];    
    document.getElementById("demo")!.innerHTML = isArray(fruits).toString();
};