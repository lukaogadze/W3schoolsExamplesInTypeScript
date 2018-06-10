document.body.onload = function (): void {
    let text: string = "";
    switch (new Date().getDay()) {
        case 6:
            text = "Today is Saturday";
            break;
        case 0:
            text = "Today is Sunday";
            break;
        default:
            text = "Looking forward to the Weekend";
    }
    document.getElementById("demo")!.innerHTML = text;
};