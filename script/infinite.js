// const infinitePicture = document.getElementById("infinite-img");
const infinitePicture = document.querySelector("#infinite-img");

console.log(infinitePicture);

let option = {
    root:null,
    rootMargin: "100px",
    scrollMargin: "0px",
    threshold: 1.0,
};

let lastScrollY = window.scrollY;
let currentTranslateX = 0;

let observerInfinite = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Écoute le scroll uniquement quand l'élément est visible
      lastScrollY = window.scrollY;
      window.addEventListener("scroll", onScroll);
      console.log("go");
    } else {
      // Stoppe l'effet quand il n'est plus visible
      lastScrollY = window.scrollY;
      window.removeEventListener("scroll", onScroll);
      console.log("stop");
    }
  });
});

observerInfinite.observe(infinitePicture);
function onScroll() {
  let currentScrollY = window.scrollY;
  // console.log(Math.abs(currentScrollY-lastScrollY));

  if (currentScrollY > lastScrollY) {
    // On descend
    currentTranslateX += 2; // décale vers la droite
  } else if (currentScrollY < lastScrollY) {
    // On monte
    currentTranslateX -= 2; // décale vers la gauche
  }

  infinitePicture.style.transform = `translateX(${currentTranslateX}px)`;
  lastScrollY = currentScrollY;
}


// function manageInfinite(entry,a,b){
//     entry.target.textContent = a;
//     let factor = (b-(b-a))/b*20;
//     if(parseInt(entry.target.textContent)<b){
//         setTimeout(manageExperiences,+factor,entry,a+2,b);
//     }

// }