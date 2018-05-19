document.body.onload = function (): void {
    const str: string = "Please locate where 'locate' occurs!";
    const pos: number = str.search("locate");
    document.getElementById("demo")!.innerHTML = pos.toString();
};