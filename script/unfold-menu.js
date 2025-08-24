const arrow = document.getElementById("unfold-menu-arrow");
const menuToFold = document.getElementById("second-menu");


let isUnFfolded = false;

arrow.addEventListener("click",()=>{
    if(isUnFfolded){
        isUnFfolded = false;
        arrow.classList.remove("unfold-menu-arrow-active");
        menuToFold.classList.remove("second-menu-active");
    }else{
        arrow.classList.add("unfold-menu-arrow-active");
        menuToFold.classList.add("second-menu-active");
        isUnFfolded = true;
    }
});