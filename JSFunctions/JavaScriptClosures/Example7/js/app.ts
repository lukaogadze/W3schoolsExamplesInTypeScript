window.onload = function (): void {
    const add: () => number = (function () {
        var counter = 0;
        return function () { counter += 1; return counter; }
    })();

    function myFunction(): void {
        document.getElementById("demo")!.innerHTML = add().toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};