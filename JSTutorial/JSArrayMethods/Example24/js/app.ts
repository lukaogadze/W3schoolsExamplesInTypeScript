document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];

    // this is valid javascript code but not valid typescript code...
    // document.getElementById("demo")!.innerHTML = fruits;
    document.getElementById("demo")!.innerHTML = fruits.toString();
};