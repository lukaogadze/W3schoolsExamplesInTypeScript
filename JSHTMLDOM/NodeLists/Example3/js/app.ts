window.onload = function (): void {
    function myFunction() {
        const myNodelist: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("p");
        for (let i = 0; i < myNodelist.length; i++) {
            myNodelist[i].style.color = "red";
        }
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;

};