document.body.onload = function (): void {
    const str: string = "Please locate where 'locate' occurs!";
    const pos: number = str.indexOf("locate",15);
    document.getElementById("demo")!.innerHTML = pos.toString();
};