const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", ()=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    bodyElement.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 300);
});