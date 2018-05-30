document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML =
        "<p><b>Math.E:</b> " + Math.E + "</p>" +
        "<p><b>Math.PI:</b> " + Math.PI + "</p>" +
        "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
        "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
        "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
        "<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
        "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
        "<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";
};