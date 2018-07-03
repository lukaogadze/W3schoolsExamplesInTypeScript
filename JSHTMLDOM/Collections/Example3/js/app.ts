window.onload = function (): void {
    function myFunction() {
        const myCollection: NodeListOf<HTMLParagraphElement> = document.getElementsByTagName("p");        
        for (let i = 0; i < myCollection.length; i++) {
            myCollection[i].style.color = "red";
        }
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};