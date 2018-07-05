window.onload = () => {
    function myFunction() {
        alert("I am an alert box!");
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};