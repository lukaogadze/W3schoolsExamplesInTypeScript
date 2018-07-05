window.onload = function (): void {
    function goBack(): void {
        window.history.back()
    }

    document.getElementsByTagName("input")[0].onclick = goBack;
};