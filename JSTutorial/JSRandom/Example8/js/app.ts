document.body.onload = function (): void {
    function getRndInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    document.getElementsByTagName("button")[0].onclick = function (): void {
        document.getElementById("demo")!.innerHTML = getRndInteger(0, 10).toString();        
    };
};