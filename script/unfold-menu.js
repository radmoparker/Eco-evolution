const arrow = document.getElementById("unfold-menu-arrow");
const menuToFold = document.getElementById("second-menu");

console.log(arrow);
console.log(menuToFold);

let isUnFfolded = false;

arrow.addEventListener("click",()=>{
    if(isUnFfolded){
        console.log("Je pli");
        isUnFfolded = false;
        arrow.classList.remove("unfold-menu-arrow-active");
        menuToFold.classList.remove("second-menu-active");
    }else{
        console.log("Je depli");
        arrow.classList.add("unfold-menu-arrow-active");
        menuToFold.classList.add("second-menu-active");
        isUnFfolded = true;
    }
});