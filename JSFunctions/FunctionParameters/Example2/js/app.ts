window.onload = function (): void {
    function findMax(...params: number[]): number {
        let max: number = -Infinity;
        for (let i = 0; i < params.length; i++) {
            if (params[i] > max) {
                max = params[i];
            }
        }
        return max;
    }

    document.getElementById("demo")!.innerHTML = findMax(4,5,6).toString();
};