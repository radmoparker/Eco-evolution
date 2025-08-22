const form = document.getElementById('dynamicForm');
const steps = form.querySelectorAll('.step');
let stepHistory = [];
let reponses = {};

form.addEventListener('click', function(e){
  const currentStep = e.target.closest('.step');

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

    console.log("Réponses actuelles :", reponses);
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
});

// Soumission du formulaire
form.addEventListener('submit', function(e){
  e.preventDefault();
  const currentStep = form.querySelector('.step.active');
  currentStep.classList.remove('active');
  const finalStep = form.querySelector('.step[data-step="13"]');
  finalStep.classList.add('active');

  console.log("Réponses finales :", reponses);
});