document.body.onload = function (): void {
    const x: any = "0";
    let text: string;

    switch (x) {
        case 0:
            text = "Off";
            break;
        // case 1:
        //     text = "On";
        default:
            text = "No value found";
    }
    document.getElementById("demo")!.innerHTML = text;
};