document.body.onload = function (): void {
    function myFunction(): void {
        const str: string = "Visit W3Schools!"; 
        const n: number = str.search(/w3Schools/i);
        document.getElementById("demo")!.innerHTML = n.toString();
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};