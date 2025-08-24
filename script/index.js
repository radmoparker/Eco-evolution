const navElements = document.querySelectorAll("nav a");
const nav = document.getElementById("navigation");
const menu = document.getElementById("menu");

const activePage = document.getElementById(nav.dataset.page);
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const homeDevis = document.getElementById("home-devis");


const menuSrc = "images/barre-de-menu-2.png"
const cancelSrc = "images/cancel.png";
const srcLogo = "images/ecoevolution-logo-ver4-new.png";
const srcBlackLogo = "images/ecoevolution-logo-green-red-white.png";


menu.addEventListener("click", menuSlide);
window.addEventListener('resize',manageResize);
window.addEventListener("scroll",manageScroll);


let isScrollManaged = false;
var slided = false;

menu.classList.add("desactive");
activePage.firstChild.classList.add("nav-active");

//ON INIT FUNCTIONS FIRST CALL
manageScroll();
manageResize();

function manageScroll(){
    if(window.scrollY>100){
        header.classList.add("header-visible");
        logo.classList.remove("logo-visible");
        homeDevis.classList.add("home-devis-active");
        logo.src = srcLogo;
        navElements.forEach(link => {
            link.classList.remove("link-visible");
        });

    }else{
        header.classList.remove("header-visible");
        logo.classList.add("logo-visible");
        homeDevis.classList.remove("home-devis-active");
        logo.src = srcBlackLogo;
        
        navElements.forEach(link => {
                link.classList.add("link-visible");
        });
    }


}

function menuSlide(){
    if (!slided){

        nav.classList.remove("desactive");
        nav.classList.add("active");
        document.body.classList.add('body-unscroll');

        nav.classList.add("nav-scroll");
        menu.src = cancelSrc;
        slided = true;

    }else {

        nav.classList.add("desactive");
        nav.classList.remove("active");
        document.body.classList.remove('body-unscroll');
        nav.classList.remove("nav-scroll");

        menu.src = menuSrc;
        slided = false;
    }

}
function manageResize(){
    if (slided){

        nav.classList.remove("active");
        nav.classList.add("desactive");
        nav.classList.remove("nav-scroll");

        menu.src = menuSrc;
        document.body.classList.remove('body-unscroll');
        slided = false;

    }
    
}