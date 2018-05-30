document.body.onload = function (): void {
    let today: Date, someday: Date, text: string;
    today = new Date();
    someday = new Date();
    someday.setFullYear(2100, 0, 14);

    if(someday > today){
        text = "Today is before January 14, 2100.";
    } else {
        text = "Today is after January 14, 2100."
    }
    document.getElementById("demo")!.innerHTML = text;
};