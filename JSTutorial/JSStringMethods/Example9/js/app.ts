document.body.onload = function (): void {
    const str: string = "Apple, Banana, Kiwi";
    const res: string = str.slice(-12);
    document.getElementById("demo")!.innerHTML = res;
};