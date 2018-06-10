document.body.onload = function (): void {
    function myFunction(): void {
        let txt: string = "";
        const inp: HTMLInputElement = document.getElementById("id1") as HTMLInputElement;        
        if (inp.validity.rangeOverflow) {
            txt = "Value too large";
        } else {
            txt = "Input OK";
        }
        document.getElementById("demo")!.innerHTML = txt;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};