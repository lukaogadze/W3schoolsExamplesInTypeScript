document.body.onload = function (): void {
    const str: string = "Apple, Banana, Kiwi";
    const res: string = str.substr(7,6);
    document.getElementById("demo")!.innerHTML = res;
};