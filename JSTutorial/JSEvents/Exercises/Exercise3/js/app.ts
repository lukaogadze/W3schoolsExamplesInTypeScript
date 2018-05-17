// The <span> element should do something when someone moves the mouse over it. Try to fix it!
document.body.onload = function (): void {
    const span: HTMLSpanElement = document.getElementsByTagName("span")[0];
    
    span.onmouseover = function (): void {
        this.style.color="red";
    };
    
};