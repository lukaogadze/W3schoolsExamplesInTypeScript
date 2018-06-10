document.body.onload = function (): void {
    function myFunction(): void {
        let txt: string = "";
        if ((document.getElementById("id1") as HTMLInputElement).validity.rangeUnderflow) {
            txt = "Value too small";
        } else {
            txt = "Input OK";
        } 
        document.getElementById("demo")!.innerHTML = txt;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};