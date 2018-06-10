document.body.onload = function (): void {
    function myFunction(): void {
        const inpObj: HTMLInputElement = document.getElementById("id1") as HTMLInputElement;
        const demo: HTMLElement = document.getElementById("demo")!;
        if (!inpObj.checkValidity()) {
            demo.innerHTML = inpObj.validationMessage;
        } else {
            demo.innerHTML = "Input OK";
        } 
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};