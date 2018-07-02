window.onload = function (): void {
    function myFunction(): void {
        const x = document.getElementById("fname") as HTMLInputElement;
        x.value = x.value.toUpperCase();
    }
    this.document.getElementById("fname")!.onchange = myFunction;
};