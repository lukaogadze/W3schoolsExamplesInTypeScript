document.body.onload = function (): void {
    const demo: HTMLElement = document.getElementById("demo")!;
    const str1: string = "John", str2: string = " ", str3: string = "Doe";
    demo.innerHTML = str1 + str2 + str3;
};