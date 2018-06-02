document.body.onload = function (): void {
    function bin2dec(bin: string): string {
        return parseInt(bin, 2).toString(10);
    }

    document.getElementById("demo")!.innerHTML = bin2dec("101");
};