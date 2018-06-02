document.body.onload = function (): void {
    function myFunction() {
        const text: string = document.getElementById("p01")!.innerHTML; 
        document.getElementById("demo")!.innerHTML = (/e/.test(text)).toString();
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};