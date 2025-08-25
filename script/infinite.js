const infinitePicture = document.querySelector("#infinite-img");

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

      lastScrollY = window.scrollY;
      
    } else {

      //Réinitialise la position du groupe d'image lorsque le groupe n'est plus visible
      lastScrollY = window.scrollY;
      infinitePicture.style.transform = `translateX(${0}px)`;
      currentTranslateX = 0;
    }

  });
});

observerInfinite.observe(infinitePicture);

window.addEventListener("scroll", onScroll);

function onScroll() {

  let currentScrollY = window.scrollY;

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