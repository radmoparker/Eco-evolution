const form = document.getElementById('dynamicForm');
const steps = form.querySelectorAll('.step');
let stepHistory = [];
let reponses = {};

//Désactivation de la validation du formulaire par touche nentrée
// form.addEventListener('keydown', function(e){
//     if(e.key === "Enter"){
//         e.preventDefault();
//     }
// });

form.addEventListener('keydown', function(e){
  if(e.key === "Enter"){
    const currentStep = e.target.closest('.step');
    const input = e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT";

    let allValid = true;
    //Empêche le blockage du passage à la ligne dans le text area (avant dernière étape du questionnaire)
    if(currentStep.dataset.step !="12B"){
      if(input){
          e.preventDefault(); 

          // Vérification des champs valides
          allValid = checkRequiredField(currentStep);
          // sinon le navigateur bloque l'Étape suivante
      }
      if(allValid){
          const nextBtn = currentStep.querySelector('button[data-next]');
          if(nextBtn){
              nextBtn.click();
          }
      }
    }

  }
});

function checkRequiredField(currentStep){
    const requiredFields = currentStep.querySelectorAll('input[required], select[required], textarea[required]');
    let allValid = true;

    requiredFields.forEach(field => {
        if(!field.checkValidity()){
        allValid = false;
        field.reportValidity(); // affiche un message (natif) de validation
        }
    });
      return allValid;


}


form.addEventListener('click', function(e){


    const currentStep = e.target.closest('.step');
    allValid = true;
    //Pour ne pas contrôlerlorsqu'on passe d'un input à l'autre
    if(!e.target.matches('.prev-btn') && !(e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT")){ //Pas la peine de vérifier si le bouton est prev
        allValid = checkRequiredField(currentStep);
    }
  if(allValid){
      // Bouton Suivant
  if(e.target.matches('button[data-next]')){
    e.preventDefault();
    const nextStepNum = e.target.dataset.next;
    const stepNum = currentStep.dataset.step;

    // Vérifier si le step contient un input (pour les m^2)
    const input = currentStep.querySelector('input, select, textarea');
    if(input){
      reponses[stepNum] = input.value.trim();
    } else {
      // Sinon on prend le texte du bouton cliqué (comme avant)
      reponses[stepNum] = e.target.textContent.trim();
    }

    // Sauvegarder l'étape
    stepHistory.push(stepNum);

    // Navigation
    currentStep.classList.remove('active');
    const nextStep = form.querySelector(`.step[data-step="${nextStepNum}"]`);
    if(nextStep){
        nextStep.classList.add('active');
    } 

    // console.log("Réponses actuelles :", reponses);
  }

  // Bouton Précédent 
  if(e.target.matches('.prev-btn')){
    e.preventDefault();
    const prevStepNum = stepHistory.pop();
    if(prevStepNum){
      currentStep.classList.remove('active');
      const prevStep = form.querySelector(`.step[data-step="${prevStepNum}"]`);
      if(prevStep) {
        prevStep.classList.add('active');

        // Restaurer ancienne valeur
        if(reponses[prevStepNum]){
          const input = prevStep.querySelector('input, select, textarea');
          if(input){    // Restaurer valeur saisie
            input.value = reponses[prevStepNum];
          } else {  // Restaurer le bouton sélectionné
            const buttons = prevStep.querySelectorAll('button[data-next]');
            buttons.forEach(btn => {
              if(btn.textContent.trim() === reponses[prevStepNum]){
                btn.classList.add('selected');
              } else {
                btn.classList.remove('selected');
              }
            });
          }
        }
      }
    }
  }

  }


});

// Soumission du formulaire
form.addEventListener('submit', function(e){
  e.preventDefault();

  const currentStep = form.querySelector('.step.active');

  // Sauvegarde de la dernière valeur
  const inputs = currentStep.querySelectorAll('textarea');
  inputs.forEach(input => {
    if(input.value.trim() !== ""){
      reponses[input.name] = input.value;
    }
  });

  // Envoie du formulaire ici
  currentStep.classList.remove('active');
  const finalStep = form.querySelector('.step[data-step="13"]');
  finalStep.classList.add('active');

  console.log("Réponses finales :", reponses);
});

const holeContact = document.getElementById("hole-service");
console.log(holeContact);

window.addEventListener("scroll",holeEffect);
uptaded = false;
function updatePicture(){
    
    holeContact.style.backgroundPosition = `center calc(50% - ${window.scrollY * 0.3}px)`;
    scrollRate=0.15;


    uptaded = false;
}

function holeEffect(){
    
    if(!uptaded){
        window.requestAnimationFrame(updatePicture);
        uptaded = true;

    }
    

}