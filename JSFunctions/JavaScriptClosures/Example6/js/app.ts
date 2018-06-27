window.onload = function (): void {    
    function add(): number {
        let counter = 0;
        function plus(): void { counter += 1; }
        plus();
        return counter;
    }

    document.getElementById("demo")!.innerHTML = add().toString();
};