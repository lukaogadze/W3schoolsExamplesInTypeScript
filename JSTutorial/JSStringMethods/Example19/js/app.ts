document.body.onload = function (): void {
    const text1: string = "Hello";
    const text2: string = "World!";
    const text3: string = text1.concat(" ",text2);
    document.getElementById("demo")!.innerHTML = text3;        
};