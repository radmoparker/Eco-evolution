const citySpan = document.getElementById("writing-slogan");
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
// const srcBlackLogo = "./images/ecoevolution-logo-black.png";
// const srcBlackLogo = "images/ecoevolution-logo-green-white-2.png";
// const srcBlackLogo = "images/ecoevolution-logo-red-white.png";
const srcBlackLogo = "images/ecoevolution-logo-green-red-white.png";


const experiences = document.querySelector("#exp-1");
const allExperiences = document.querySelectorAll(".experience");

// experiences.textContent = 5;


menu.addEventListener("click", menuSlide);
window.addEventListener('resize',manageResize);
window.addEventListener("scroll",manageScroll);


let isScrollManaged = false;
var slided = false;

menu.classList.add("desactive");
activePage.firstChild.classList.add("nav-active");

//ON INIT FUNCTION FIRST CALL
manageScroll();
manageResize();
// window.addEventListener("scroll",()=> {
//     if(!isScrollManaged){
//         isScrollManaged = true;
//         manageScroll();
//     }else{
        
//         setTimeout(()=>{isScrollManaged =false;},200);
//     }

// });

function manageScroll(){
    if(window.scrollY>100){
        header.classList.add("header-visible");
        logo.classList.remove("logo-visible");
        homeDevis.classList.add("home-devis-active");
        logo.src = srcLogo;
        navElements.forEach(link => {
            link.classList.remove("link-visible");
        });
        // console.log("Eh oui mon gars, on appelle ca l'experience !! ");

    }else{
        header.classList.remove("header-visible");
        logo.classList.add("logo-visible");
        homeDevis.classList.remove("home-devis-active");
        logo.src = srcBlackLogo;
        
        navElements.forEach(link => {
                link.classList.add("link-visible");
        });
        // console.log("OHOHIHIH !! ");
    }

    //Expérience part
    // if(parseInt(experiences.getBoundingClientRect().top) +10 <= parseInt(window.innerHeight)){
    //     experiences.textContent = "9";
    // }else{
    //      experiences.textContent = "0";
    // }
    // console.log(experiences.getBoundingClientRect().top,window.innerHeight)
}


// experiences = document.querySelector("#exp-1"); 
// let valors = [247,329,163,215];

// const observer = new IntersectionObserver((entries) => {
//     let i = 0;
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log("Visible !");
//             // manageExperiences(entry,0,256);
//             setTimeout(manageExperiences,100,entry,0,entry.target.dataset.limit);
//             i+=1;

//         }
//     });
// }, { threshold: 0.1 });

// observer.observe(experiences);
// console.log(experiences.dataset.limit);
// const experiences = document.querySelector("#exp-1");
    let options = {
        root:null,
        rootMargin: "-20px",
        scrollMargin: "0px",
        threshold: 1.0,
    };

let observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        
        if(entry.isIntersecting){
            setTimeout(manageExperiences,100,entry,0,entry.target.dataset.limit);
            observer.unobserve(entry.target);
        }
    });
},options);

allExperiences.forEach((experience)=>{
    console.log("Experience",experience.children[0],experience.children[0].dataset.limit);
    observer.observe(experience.children[0]);
    
})

function manageExperiences(entry,a,b){
    entry.target.textContent = a;
    let factor = (b-(b-a))/b*20;
    if(parseInt(entry.target.textContent)<b){
        setTimeout(manageExperiences,+factor,entry,a+2,b);
    }

}

// console.log("test data-page",nav.dataset.page);

// nav.forEach(element => {console.log("dezd",element);});
// for(let i=0; i< navElements.length-1; i++){

//     if(window.location.pathname == "/"+navElements[i].getAttribute("href")){
//             console.log(window.location.pathname,"/"+navElements[i].getAttribute("href"));
//             navElements[i].firstChild.classList.add("nav-active");

//     }
// }
// citySpan.textContent = "dedze";

// const cities = [
//   "Metz",
//   "Nancy",
//   "Thionville",
//   "Épinal",
//   "Vandœuvre-lès-Nancy",
//   "Montigny-lès-Metz",
//   "Sarreguemines",
//   "Saint-Dié-des-Vosges",
//   "Forbach",
//   "Lunéville"
// ];
// const cities = [
//   "Metz",
//   "Nancy",
//   "Thionville",
//   "Épinal",
//   "Vandœuvre",
//   "Sarreguemines",
//   "Saint-Dié-des-Vosges",
//   "Forbach",
//   "Lunéville"
// ];
// const villesSimplesLorraine = [
//   "Metz",
//   "Nancy",
//   "Thionville",
//   "Épinal",
//   "Forbach",
//   "Longwy",
//   "Hayange",
//   "Commercy",
//   "Bar-le-Duc", 
//   "Sarrebourg"  
// ];
const cities = [
    "Neuves-Maisons",
    "Nancy",
    "Metz",
    "Thionville",
    "Épinal",
    "Forbach",
    "Longwy",
    "Hayange",
    "Commercy",
    "Sarrebourg",
    "Neufchâteau"
];

// console.log(cities[0][cities[0].length-1]);


function typeWrite(buffer, elements, currentElement, currentLetter, deleting) {
    if(!deleting){
        if ( currentLetter <= elements[currentElement].length - 1) {
            buffer.innerHTML = "&nbsp;"+elements[currentElement].substring(0, currentLetter + 1);
            setTimeout(typeWrite,150,buffer, elements, currentElement, currentLetter + 1, deleting);
        }else{
            deleting=true;
            currentLetter-=1;
            setTimeout(typeWrite,300,buffer, elements, currentElement, currentLetter + 1, deleting);
        }
    }else{
        if(currentLetter >=0){
            buffer.innerHTML = "&nbsp;"+elements[currentElement].substring(0, currentLetter );
            currentLetter-=1;
            setTimeout(typeWrite,50,buffer, elements, currentElement, currentLetter, deleting);

        }else{
            deleting = false;
            //On passe au mot suivant : 
            currentElement = (currentElement + 1) % (elements.length);
            currentLetter = 0;
            setTimeout(typeWrite,200,buffer, elements, currentElement, currentLetter, deleting);
        }
    }

}


function menuSlide(){
    if (!slided){
        nav.classList.remove("desactive");
        nav.classList.add("active");
        document.body.classList.add('body-unscroll');
        nav.classList.add("nav-scroll");
        menu.src = cancelSrc;
        // logo.classList.remove("logo-visible");  //increase logo size
        // title.classList.remove("title-visible");
        slided = true;

    }else {
        nav.classList.add("desactive");
        nav.classList.remove("active");
        document.body.classList.remove('body-unscroll');
        nav.classList.remove("nav-scroll");
        menu.src = menuSrc;
        // logo.classList.add("logo-visible");
        
        // if(parseInt(window.scrollY) > 100){
        //     logo.classList.add("logo-visible"); //decrease logo size
        //     title.classList.add("title-visible");
        // }else{
        //     title.classList.remove("title-visible");
        // }

        slided = false;
        console.log("Menu désactivé");
    }

}
function manageResize(){
    if (slided){
        nav.classList.remove("active");
        nav.classList.add("desactive");
        nav.classList.remove("nav-scroll");
        menu.src = menuSrc;
        document.body.classList.remove('body-unscroll');
        
        if(parseInt(window.scrollY) > 100){
            // logo.classList.add("logo-visible"); //decrease logo size
            // title.classList.add("title-visible");
        }
        
        slided = false;
        // console.log("Navbar : Menu désactivé");

    }
    
}

typeWrite(citySpan, cities, 0, 0, false);

// Maisons rénovées


// Calorifugeage


// Audit énergétique RGE

