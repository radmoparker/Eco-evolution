const form = document.getElementById('dynamicForm');
const steps = form.querySelectorAll('.step');
let stepHistory = [];
let reponses = {};

const progressBar = document.querySelector(".progress-bar");
// .style.width = "300px";
let nbReponse = 1;
let totalReponses = 13;



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


    let stepNum = 0;
    let currentStep = e.target.closest('.step');
    allValid = true;
    //Pour ne pas contrôler lorsqu'on passe d'un input à l'autre
    if(!e.target.matches('.prev-btn') && !(e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT")){ //Pas la peine de vérifier si le bouton est prev
        allValid = checkRequiredField(currentStep);
    }
  if(allValid){
    // Bouton Suivant
    if(e.target.matches('button[data-next]')){
      e.preventDefault();
      
      let nextStepNum = e.target.dataset.next;
      let stepNum = currentStep.dataset.step;
      console.log(stepNum);
      if (["5A", "5B", "5C"].includes(stepNum)) {
        nbReponse+=0.5; //for progress Bar
        console.log("Réponse actuelle",nbReponse);
        progressBar.style.width =`${nbReponse/totalReponses*100}%`;
        nbReponse-=0.5;
      }else{
        nbReponse+=1; //for progress Bar
        console.log("Réponse actuelle",nbReponse);
        progressBar.style.width =`${nbReponse/totalReponses*100}%`;
      }
      

      // Vérifier si le step contient un input 
      
      const inputs = currentStep.querySelectorAll('input, select, textarea');
      if(inputs.length > 0){
        inputs.forEach(input => {
          reponses[input.name] = input.value.trim();
        });
      } else {  // Sinon on prend le texte du bouton cliqué (comme avant)
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
    }

    // Bouton Précédent 
    if(e.target.matches('.prev-btn')){
      e.preventDefault();
      const prevStepNum = stepHistory.pop();
      if(prevStepNum){
        console.log("prevNumStep",prevStepNum);
          if (!(["5A", "5B", "5C"].includes(prevStepNum))) {
            console.log("jfnrjienvefijkvrcjeknvefjknec");
            nbReponse-=1;
            console.log("Réponse actuelle",nbReponse);
            progressBar.style.width =`${nbReponse/totalReponses*100}%`;
          }else{
            console.log("Réponse actuelle",nbReponse);
            progressBar.style.width =`${nbReponse/totalReponses*100}%`;
            console.log("ooooooooooooo");
          }
        
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
      //ProgressBar calcul
      // if(stepNum){
      //   console.log("on est en train d'annuler");
      //   if (["5A", "5B", "5C"].includes(stepNum)) {
          
      //     nbReponse-=0.5; //for progress Bar
      //   }
      // }
      // console.log("Réponse actuelle",nbReponse);
      
      // progressBar.style.width =`${nbReponse/totalReponses*100}%`;

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
  progressBar.style.width = "0%";

  // Envoie du formulaire ici
  currentStep.classList.remove('active');
  const finalStep = form.querySelector('.step[data-step="13"]');
  finalStep.classList.add('active');

  //Envoi du formaulaire via emailjs
  sendMail(reponses);
});

/*Partie pour parralax effect */
const holeContact = document.getElementById("hole-service");

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


function sendMail(reponses){
    let logement = reponses["1"];
    let dateLogement = reponses["2"];
    let surface = reponses["surface"]
    let chauffage = reponses["4"];
    let chaudiere = "Non demandé";
    if("5A" in reponses){
      chaudiere = reponses["5A"];
    }
    if("5B" in reponses){
      chaudiere = reponses["5B"];
    }
    if("5C" in reponses){
      chaudiere = reponses["5C"];
    }
    let performance = reponses["6"];
    let demande = reponses["7"];
    let statut = reponses["8"];
    let postal = reponses["codepostal"];
    let personnes = reponses["personnes"];
    let revenus = reponses["11"];
    let civilite = reponses["civilite"];
    let email = reponses["email"];
    let nom = reponses["nom"];
    let prenom = reponses["prenom"];
    let tel = reponses["telephone"];
    
    let description = reponses["description"];
    if(!description){
      description ="Aucune description";
    }

    let templateParams = {
      logement: logement,
      dateLogement: dateLogement,
      surface: surface,
      chauffage: chauffage,
      chaudiere: chaudiere,
      performance: performance,
      demande: demande,
      statut: statut,
      postal: postal,
      personnes: personnes,
      revenus: revenus,
      civilite: civilite,
      email: email,
      nom: nom,
      prenom: prenom,
      tel: tel,
      description: description
    };
     let serviceId = "service_d7f7xzr";
     let templateId = "template_mvbkstf";


    emailjs.send(serviceId, templateId, templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );

}