const holeService = document.getElementById("hole-service");

window.addEventListener("scroll",holeEffect);
uptaded = false;
function updatePicture(){
    
    holeService.style.backgroundPosition = `center calc(50% - ${window.scrollY * 0.3}px)`;
    scrollRate=0.15;
    uptaded = false;
}

function holeEffect(){
    
    if(!uptaded){
        window.requestAnimationFrame(updatePicture);
        uptaded = true;

    }

}
