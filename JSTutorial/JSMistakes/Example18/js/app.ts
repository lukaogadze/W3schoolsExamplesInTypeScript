document.body.onload = function (): void {    
    function myFunction(a: number): number {
        const 
        power: number = 10;
        return a * power;
    }

    document.getElementById("demo")!.innerHTML = myFunction(55).toString();
};