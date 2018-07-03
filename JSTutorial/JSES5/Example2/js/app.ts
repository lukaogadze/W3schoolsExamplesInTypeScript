window.onload = function (): void {
    function myFunction() {
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        const x = document.getElementById("demo")!;
        x.innerHTML = Array.isArray(fruits).toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};