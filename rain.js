let amount = 250;
let body = document.querySelector("body");
let button = document.querySelector(".rain");
let black = document.querySelector(".black");
function rain(){
    button.style.opacity = 0
    let i = 0;
    while(i < amount){
        let drop = document.createElement('i')
        let size = Math.random() * 5
        let posX = Math.floor(Math.random() * window.innerWidth)
        let delay = Math.random() * -20
        let duration = Math.random() * 4

        drop.style.width = 0.2 + size+"px"
        drop.style.left = posX + "px"
        drop.style.animationDelay = delay + "s"
        drop.style.animationDuration = .8 + duration + "s"
        body.appendChild(drop)
        i++
    }
    black.style.top = 100 + "%";
    black.style.opacity = .5;
}
