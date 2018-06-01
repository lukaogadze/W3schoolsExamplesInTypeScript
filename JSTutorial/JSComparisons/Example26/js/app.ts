document.body.onload = function (): void {
    function myFunction() {
        let age: number, voteable: string;
        age = Number((<HTMLInputElement>document.getElementById("age")).value);
        if (isNaN(age)) {
            voteable = "Input is not a number";
        } else {
            voteable = (age < 18) ? "Too young" : "Old enough";
        }
        document.getElementById("demo")!.innerHTML = voteable;
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};