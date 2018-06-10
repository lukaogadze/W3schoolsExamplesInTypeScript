document.body.onload = function (): void {
    function myFunction(): void {
        let x: number, text: string;

        // Get the value of the input field with id="numb"
        x = parseInt((document.getElementById("numb") as HTMLInputElement).value);

        // If x is Not a Number or less than one or greater than 10
        if (isNaN(x) || x < 1 || x > 10) {
            text = "Input not valid";
        } else {
            text = "Input OK";
        }
        document.getElementById("demo")!.innerHTML = text;
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
}
