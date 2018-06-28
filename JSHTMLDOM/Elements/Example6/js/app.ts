window.onload = function (): void {
    function myFunction(): void {
        const x: HTMLFormElement = document.forms.namedItem("frm1");
        let text: string = ""
        for (let i = 0; i < x.length; i++) {
            text += (x.elements[i] as HTMLInputElement).value + "<br>";
        }
        document.getElementById("demo")!.innerHTML = text;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};