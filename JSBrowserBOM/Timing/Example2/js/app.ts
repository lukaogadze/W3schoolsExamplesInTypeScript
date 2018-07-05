window.onload = () => {
    function myFunction(): void {
        alert('Hello');
    }
    const btns = document.getElementsByTagName("button");
    let timeoutNum = 0;
    btns[0].onclick = function (): void {
        timeoutNum = setTimeout(myFunction, 3000);
    };
    btns[1].onclick = function (): void {
        clearTimeout(timeoutNum);
    };
};