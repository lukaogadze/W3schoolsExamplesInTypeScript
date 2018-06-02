document.body.onload = function (): void {
    function dec2bin(dec: number): string {
        return (dec >>> 0).toString(2);
    }

    document.getElementById("demo")!.innerHTML = dec2bin(-5);
};