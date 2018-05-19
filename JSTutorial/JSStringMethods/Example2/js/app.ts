document.body.onload = function (): void {
    const str: string = "Please locate where 'locate' occurs!";
    var pos: number = str.indexOf("locate");
    document.getElementById("demo")!.innerHTML = pos.toString();
};