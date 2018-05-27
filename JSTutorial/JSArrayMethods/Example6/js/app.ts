document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];    
    const demo: HTMLElement = document.getElementById("demo1")!;
    demo.innerHTML = fruits.toString();
    
    function myFunction(): void {
        document.getElementById("demo2")!.innerHTML = fruits.push("Kiwi").toString();
        demo.innerHTML = fruits.toString();
    };
    document.getElementsByTagName("button")[0].onclick = myFunction;
};