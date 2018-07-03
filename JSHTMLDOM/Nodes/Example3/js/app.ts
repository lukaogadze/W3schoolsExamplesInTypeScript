window.onload = function (): void {
    const parent = document.getElementById("div1") as HTMLDivElement;
    const child = document.getElementById("p1") as HTMLParagraphElement;
    parent.removeChild(child);
};