document.body.onload = function (): void {
    let text: string = "";
    switch (new Date().getDay()) {
        case 4:
        case 5:
            text = "Soon it is Weekend";
            break;
        case 0:
        case 6:
            text = "It is Weekend";
            break;
        default:
            text = "Looking forward to the Weekend";
    }
    document.getElementById("demo")!.innerHTML = text;
};