window.onload = () => {
    function myTimer(): void {
        const d = new Date();
        document.getElementById("demo")!.innerHTML = d.toLocaleTimeString();
    }

    const myVar = setInterval(myTimer, 1000);

    document.getElementsByTagName("button")[0].onclick = function () {
        clearInterval(myVar);
    };
};