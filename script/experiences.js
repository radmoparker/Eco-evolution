const experiences = document.querySelector("#exp-1");
const allExperiences = document.querySelectorAll(".experience");

let options = {
    root:null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 1.0,
};

let observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        
        if(entry.isIntersecting){
            setTimeout(manageExperiences,100,entry,1,entry.target.dataset.limit);
            observer.unobserve(entry.target);
        }
    });
},options);

allExperiences.forEach((experience)=>{
    observer.observe(experience.children[0]);
})

function manageExperiences(entry,a,b){
    entry.target.textContent = a;
    let factor = (b-(b-a))/b*30;
    if(parseInt(entry.target.textContent)<b){
        setTimeout(manageExperiences,+factor,entry,a+2,b);
    }

}