
const bodyElement = document.querySelector("body");

bodyElement.addEventListener('mousemove',(event) =>{

 // aita holo mouse move korr jonno 
  const xPos =event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

// aita holo size set kprara jonno
const size = Math.random() *100;
spanEl.style.width = size + "px";
spanEl.style.height = size + "px";

// aita holo span ta remove korar jonno 
bodyElement.appendChild(spanEl);
setTimeout(() =>{
    spanEl.remove();
} , 3000);

})