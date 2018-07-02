window.onload = function (): void {
    function mOver(obj: HTMLDivElement): void {
        obj.innerHTML = "Thank You"
    }
    
    function mOut(obj: HTMLDivElement): void {
        obj.innerHTML = "Mouse Over Me"
    }

    const div = document.getElementsByTagName("div")[0];
    div.onmouseover = function () {
        mOver(this as HTMLDivElement);
    };
    
    div.onmouseout = function (): void {
        mOut(this as HTMLDivElement);
    };
};