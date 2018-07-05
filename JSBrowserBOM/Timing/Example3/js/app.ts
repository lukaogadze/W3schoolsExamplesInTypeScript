window.onload = () => {     
    const demo = document.getElementById("demo")!;
    function myTimer() {
        const d: Date = new Date();        
        demo.innerHTML = d.toLocaleTimeString();
    }

    const myVar: number = setInterval(myTimer, 1000);
    console.log(myVar);
};