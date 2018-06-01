document.body.onload = function (): void {
    function myFunction() {
        let age: number, voteable: string;
        age = parseInt((<HTMLInputElement>document.getElementById("age")).value);
        voteable = (age < 18) ? "Too young" : "Old enough";
        document.getElementById("demo")!.innerHTML = voteable + " to vote.";
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};