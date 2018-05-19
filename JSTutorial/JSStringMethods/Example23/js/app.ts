document.body.onload = function (): void {
    const str: string = "Hello";
    const arr: string[] = str.split("");
    let text: string = "";
    for (let i = 0; i < arr.length; i++) {
        text += arr[i] + "<br>";        
    }
    document.getElementById("demo")!.innerHTML = text;
}