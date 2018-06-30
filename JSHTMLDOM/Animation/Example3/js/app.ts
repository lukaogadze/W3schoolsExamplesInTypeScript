window.onload = function (): void {
    function myMove(): void {
        const elem: HTMLDivElement = document.getElementById("animate") as HTMLDivElement;
        let pos: number = 0;
        const id: number = setInterval(() => {
            frame(id);
        }, 5);
        function frame(id: number) {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    document.getElementsByTagName("button")[0].onclick = myMove;
};