namespace Events.Example5 {
    function checkCookies(): void {
        let text = "";
        if (navigator.cookieEnabled == true) {
            text = "Cookies are enabled.";
        } else {
            text = "Cookies are not enabled.";
        }
        document.getElementById("demo")!.innerHTML = text;
    }
    document.body.onload = checkCookies;
}