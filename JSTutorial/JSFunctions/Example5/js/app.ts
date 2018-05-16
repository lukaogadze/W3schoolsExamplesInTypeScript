document.body.onload = function (): void {
    function toCelsius(f: number): number {
        return (5/9) * (f-32);
    }

    document.getElementById("demo")!.innerHTML = `The temperature is ${toCelsius(77)} Celsius`;
    
};