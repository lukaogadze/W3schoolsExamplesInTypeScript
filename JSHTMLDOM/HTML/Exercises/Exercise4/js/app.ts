// Use HTML DOM to change the value of the input's value attribute to "Goodbye".
window.onload = function (): void {
    const el = document.getElementById("myText") as HTMLInputElement;
    el.value = "Goodbye";
};