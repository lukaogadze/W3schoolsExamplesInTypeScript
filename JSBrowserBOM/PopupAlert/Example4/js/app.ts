window.onload = () => {
    function myFunction(): void {
        alert('Hello\nHow are you?');
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};