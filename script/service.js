const holeService = document.getElementById("hole-service");
const holeServiceBottom = document.getElementById("hole-service-bottom");

window.addEventListener("scroll",holeEffect);
uptaded = false;
function updatePicture(){
    
    holeService.style.backgroundPosition = `center calc(50% - ${window.scrollY * 0.3}px)`;
    scrollRate=0.1;

    holeServiceBottom.style.backgroundPosition = `center calc(50% - ${window.scrollY * scrollRate}px) `;

    uptaded = false;
}

function holeEffect(){
    if(!uptaded){
        window.requestAnimationFrame(updatePicture);
        uptaded = true;
    }
}