document.body.onload = function (): void {
    function myFunction(): void {
        const hour: number = new Date().getHours(); 
        let greeting: string;
        if (hour < 18) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }
        document.getElementById("demo")!.innerHTML = greeting;
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};