window.onload = function (): void {
    const arr: string[] = ["John", "Peter", "Sally", "Jane"];
    const myJSON: string = JSON.stringify(arr);
    document.getElementById("demo")!.innerHTML = myJSON;
};