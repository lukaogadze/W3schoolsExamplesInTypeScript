document.body.onload = function (): void {
    const result: string = `${Number(true)}<br>${Number(false)}<br>${Number("  10")}<br>${Number("10  ")}<br>${Number("10 6")}<br>${Number("John")}`;    
    document.getElementById("demo")!.innerHTML = result
};