window.onload = function (): void {
    window.addEventListener("resize", function(){
        document.getElementById("demo")!.innerHTML = Math.random().toString();
    });
};