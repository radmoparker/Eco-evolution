const imagesLine = document.getElementById("infinite-img");

let latestScroll = 0;
let currentX = 0;
let ticking = false;

function update() {
  // déplacement proportionnel au scroll
  const targetX = -latestScroll * 0.5; // 0.5 = vitesse (ajuste)
  
  // interpolation douce
  currentX += (targetX - currentX) * 0.1;
  
  imagesLine.style.transform = `translateX(${currentX}px)`;
  ticking = false;
}

window.addEventListener("scroll", () => {
  latestScroll = window.scrollY;

  if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
  }
});
