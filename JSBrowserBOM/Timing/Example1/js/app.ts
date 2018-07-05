window.onload = () => {
    function myFunction(): void {
        alert('Hello');
    }

    document.getElementsByTagName("button")[0].onclick = function () {
        setTimeout(myFunction, 3000);
    };
};