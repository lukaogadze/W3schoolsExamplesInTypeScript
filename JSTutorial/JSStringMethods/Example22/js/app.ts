document.body.onload = function (): void {
    function myFunction(): void {
        const str: string = "a,b,c,d,e,f";
        const arr: Array<string> = str.split(",");
        document.getElementById("demo")!.innerHTML = arr[0];
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};