document.body.onload = function (): void {
    function myFunction(): void {
        let greeting: string;
        var time = new Date().getHours();
        if (time < 10) {
            greeting = "Good morning";
        } else if (time < 20) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }
        document.getElementById("demo")!.innerHTML = greeting;
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};