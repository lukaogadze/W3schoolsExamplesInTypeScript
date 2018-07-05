window.onload = function (): void {
    function goForward() {
        window.history.forward()
    }

    document.getElementsByTagName("input")[0].onclick = goForward;
};