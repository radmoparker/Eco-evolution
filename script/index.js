const citySpan = document.getElementById("writing-slogan");
const nav = document.querySelectorAll("nav a");

// nav.forEach(element => {console.log("dezd",element);});
for(let i=0; i< nav.length-1; i++){
        // console.log(window.location.pathname,nav[i].getAttribute("href"));

    if(window.location.pathname == "/"+nav[i].getAttribute("href")){
            console.log(window.location.pathname,"/"+nav[i].getAttribute("href"));
            nav[i].firstChild.classList.add("nav-active");

    }
}
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

console.log(cities[0][cities[0].length-1]);


function typeWrite(buffer, elements, currentElement, currentLetter, deleting) {
  var nbElements = elements.length - 1;
    if(!deleting){
        if ( currentLetter <= elements[currentElement].length - 1) {
            buffer.textContent = elements[currentElement].substring(0, currentLetter + 1);
            setTimeout(typeWrite,150,buffer, elements, currentElement, currentLetter + 1, deleting);
        }else{
            deleting=true;
            currentLetter-=1;
            setTimeout(typeWrite,300,buffer, elements, currentElement, currentLetter + 1, deleting);
        }
    }else{
        if(currentLetter >=0){
            buffer.textContent = elements[currentElement].substring(0, currentLetter );
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




typeWrite(citySpan, cities, 0, 0, false);