document.body.onload = function (): void {
    const x1: object = {};
    const x2: string = "";
    const x3: number = 0;
    const x4: boolean = false;
    const x5: any[] = [];
    const x6: object = /()/;
    const x7: () => void = function () { };

    document.getElementById("demo")!.innerHTML =
        "x1: " + typeof x1 + "<br>" +
        "x2: " + typeof x2 + "<br>" +
        "x3: " + typeof x3 + "<br>" +
        "x4: " + typeof x4 + "<br>" +
        "x5: " + typeof x5 + "<br>" +
        "x6: " + typeof x6 + "<br>" +
        "x7: " + typeof x7 + "<br>";
};