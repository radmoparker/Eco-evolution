
const citySpan = document.getElementById("writing-slogan");

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

typeWrite(citySpan, cities, 0, 0, false);