document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];
    const demo:HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = fruits.toString();

    document.getElementsByTagName("button")[0].onclick = function (): void {
        fruits.splice(2,0,"Lemon","Kivi");
        demo.innerHTML = fruits.toString();
    };
};