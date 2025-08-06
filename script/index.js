const citySpan = document.getElementById("writing-slogan");
const navElements = document.querySelectorAll("nav a");
const nav = document.getElementById("navigation");
const menu = document.getElementById("menu");
const activePage = document.getElementById(nav.dataset.page);

const menuSrc = "../images/barre-de-menu-2.png"
const cancelSrc = "images/cancel.png";



menu.addEventListener("click", menuSlide);
window.addEventListener('resize',manageResize);


var slided = false;

menu.classList.add("desactive");
activePage.firstChild.classList.add("nav-active");
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
        menu.src = "images/menu-2.png";
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