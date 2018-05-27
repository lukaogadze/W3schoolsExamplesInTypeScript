// Use the concat() method to concatenate girls and boys.
document.body.onload = function (): void {
    const girls: string[] = ["Cecilie", "Lone"];
    const boys: string[] = ["Emil","Tobias","Linus"];
    const children: string[] = girls.concat(boys);

    document.getElementById("demo")!.innerHTML = children.toString();
};