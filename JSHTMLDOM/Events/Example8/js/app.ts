window.onload = function (): void {
    function mDown(obj: HTMLDivElement): void {
        obj.style.backgroundColor = "#1ec5e5";
        obj.innerHTML = "Release Me";
    }
    
    function mUp(obj: HTMLDivElement): void {
        obj.style.backgroundColor="#D94A38";
        obj.innerHTML="Thank You";
    }

    const div = document.getElementsByTagName("div")[0];
    div.onmousedown = function () {
        mDown(this as HTMLDivElement);
    };
    
    div.onmouseup = function (): void {
        mUp(this as HTMLDivElement);
    };
};