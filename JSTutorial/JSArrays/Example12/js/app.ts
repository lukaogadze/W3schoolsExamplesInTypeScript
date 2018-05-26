document.body.onload = function (): void {
    const fruits: string[] = ["Banana","Orange","Apple","Mango"];    
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = fruits.join(",");
    function myFunction(): void {
        fruits[fruits.length] = "Lemon";
        demo.innerHTML = fruits.join(",");
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
    
};