window.onload = function (): void {
    function sumAll(...params: number[]): number {
        let sum: number = 0;
        for (let i = 0; i < params.length; i++) {
            sum += params[i];
        }
        return sum;
    }

    this.document.getElementById("demo")!.innerHTML =
        sumAll(1, 123, 500, 115, 44, 88).toString();        
};