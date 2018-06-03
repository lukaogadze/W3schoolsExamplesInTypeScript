document.body.onload = function (): void {
    function myFunction(): void {
        let message: HTMLElement, x: any;
        message = document.getElementById("p01")!;
        message.innerHTML = "";
        x = (<HTMLInputElement>document.getElementById("demo")).value;
        try {
            if (x == "") {
                throw "empty";
            }
            if (isNaN(x)) {
                throw "not a nmber";
            }
            x = Number(x);
            if (x < 5) {
                throw "too low";
            }
            if (x > 10) {
                throw "too high";
            }

        } catch (error) {
            message.innerHTML = `Input is ${error}`;
        } finally {
            (<HTMLInputElement>document.getElementById("demo")).value = "";
        }
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};