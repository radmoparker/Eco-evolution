const holeService = document.getElementById("hole-service");


window.addEventListener("scroll",holeEffect);
uptaded = false;
function updatePicture(){
    
    holeService.style.backgroundPosition = `center calc(50% - ${window.scrollY * 0.3}px)`;
    scrollRate=0.15;


    uptaded = false;
}

function holeEffect(){
    
    if(!uptaded){
        window.requestAnimationFrame(updatePicture);
        uptaded = true;

    }
    

}



const renovationGlobale = {
  title: `<h1 class="prestation-title" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Rénovation Globale</h1>`,
  content: `<div class="intro">
                <h2>Améliorez durablement votre habitat</h2>
                <p>La rénovation globale est la solution idéale pour optimiser la performance énergétique de votre logement tout en bénéficiant des aides financières les plus avantageuses.</p>
            </div>

            <div class="expertise">
                <p>
                Chez <strong>Eco Evolution</strong>, nous vous accompagnons de A à Z dans votre projet de rénovation globale. 
                Nos experts certifiés RGE basés à Nancy et dans toute la Lorraine assurent des travaux de qualité, 
                conformes aux normes en vigueur et pensés pour maximiser vos économies d’énergie.
                </p>
            </div>

            <div class="description">
                <p>
                La <strong>rénovation globale</strong> consiste à regrouper plusieurs actions de rénovation énergétique 
                en un seul projet cohérent : isolation thermique, chauffage performant, ventilation… 
                Cette approche permet d’obtenir des gains énergétiques importants et d’accéder 
                aux aides les plus élevées comme <em>MaPrimeRénov’ Sérénité</em> et les <em>Certificats d’Économies d’Énergie (CEE)</em>. 
                Résultat : un logement plus confortable, plus économe et valorisé sur le marché immobilier.
                </p>
            </div>

            <div class="cards">
                <h1>Pourquoi Rénover ?</h1>
                <div class="card">
                <h3>Aides financières renforcées</h3>
                <p>Bénéficiez de subventions couvrant jusqu’à 50 % de vos travaux grâce à MaPrimeRénov’ Sérénité et aux CEE.</p>
                </div>
                <div class="card">
                <h3>Économies d’énergie</h3>
                <p>Divisez vos factures de chauffage par deux grâce à une maison mieux isolée et plus performante.</p>
                </div>
                <div class="card">
                <h3>Confort durable</h3>
                <p>Profitez d’une température stable toute l’année, sans courants d’air ni zones froides.</p>
                </div>
            </div>`};

const isolation = {
  title: `<h1 class="prestation-title">Isolation Intérieure & Extérieure</h1>`,
  content: `<div class="intro">
                <h2>Une maison bien isolée, des économies assurées</h2>
                <p>L’isolation thermique est la clé pour limiter les pertes de chaleur et améliorer le confort de votre habitat.</p>
            </div>

            <div class="expertise">
                <p>
                Avec <strong>Eco Evolution</strong>, vos travaux d’isolation intérieure et extérieure sont réalisés par des professionnels certifiés RGE. 
                Nous utilisons des matériaux performants et durables, adaptés aux spécificités de chaque bâtiment de Lorraine et du Grand Est. 
                Nos équipes assurent une pose soignée garantissant des résultats mesurables immédiatement.
                </p>
            </div>

            <div class="description">
                <p>
                L’isolation par l’intérieur est idéale pour réduire vos factures de chauffage rapidement, 
                tandis que l’isolation par l’extérieur permet de traiter efficacement les ponts thermiques 
                tout en rénovant la façade. Dans les deux cas, vos murs deviennent de véritables barrières thermiques. 
                Ces solutions ouvrent droit aux aides comme <em>MaPrimeRénov’</em> et les <em>CEE</em>.
                </p>
            </div>

            <div class="cards">
                <h1>Pourquoi Isoler ?</h1>
                <div class="card">
                <h3>Aides disponibles</h3>
                <p>Profitez de subventions couvrant jusqu’à 40 €/m² pour l’isolation extérieure et 25 €/m² pour l’intérieur.</p>
                </div>
                <div class="card">
                <h3>Économies immédiates</h3>
                <p>Réduisez jusqu’à 30 % vos dépenses énergétiques dès la première année.</p>
                </div>
                <div class="card">
                <h3>Confort thermique</h3>
                <p>Fini les murs froids et l’humidité, votre maison devient plus agréable à vivre.</p>
                </div>
            </div>`};

const calorifugeage = {
  title: `<h1 class="prestation-title">Calorifugeage</h1>`,
  content: `<div class="intro">
                <h2>Protégez vos canalisations et économisez</h2>
                <p>Le calorifugeage limite les pertes de chaleur de vos réseaux de tuyauterie et optimise votre installation.</p>
            </div>

            <div class="expertise">
                <p>
                Les spécialistes <strong>Eco Evolution</strong> réalisent le calorifugeage dans les règles de l’art. 
                Notre savoir-faire RGE permet d’assurer des interventions efficaces et conformes aux normes environnementales, 
                pour les particuliers comme pour les copropriétés en Lorraine.
                </p>
            </div>

            <div class="description">
                <p>
                Le <strong>calorifugeage</strong> consiste à poser un isolant autour des canalisations d’eau chaude, des conduits ou des réservoirs. 
                Cette technique simple permet de réduire vos pertes d’énergie jusqu’à 20 % et d’alléger vos factures. 
                Elle est particulièrement efficace dans les immeubles collectifs où les longueurs de tuyaux sont importantes. 
                Le dispositif est éligible aux <em>CEE</em>.
                </p>
            </div>

            <div class="cards">
                <h1>Pourquoi Calorifuger ?</h1>
                <div class="card">
                <h3>Aides financières</h3>
                <p>Le calorifugeage peut être financé jusqu’à 100 % via les Certificats d’Économies d’Énergie.</p>
                </div>
                <div class="card">
                <h3>Économie immédiate</h3>
                <p>Baissez vos charges collectives grâce à une diminution significative des pertes de chaleur.</p>
                </div>
                <div class="card">
                <h3>Durabilité</h3>
                <p>Une installation protégée et isolée résiste mieux au temps et nécessite moins d’entretien.</p>
                </div>
            </div>`};

const auditEnergetique = {
  title: `<h1 class="prestation-title">Audit Énergétique RGE</h1>`,
  content: `<div class="intro">
                <h2>Analysez la performance de votre maison</h2>
                <p>L’audit énergétique identifie précisément les faiblesses de votre logement et propose des solutions adaptées.</p>
            </div>

            <div class="expertise">
                <p>
                Avec <strong>Eco Evolution</strong>, vos audits sont réalisés par des experts certifiés RGE. 
                Nous garantissons une analyse claire, des conseils personnalisés et un accompagnement pour mettre en œuvre les améliorations. 
                Un service complet à Nancy et dans toute la Lorraine.
                </p>
            </div>

            <div class="description">
                <p>
                L’<strong>audit énergétique RGE</strong> est un diagnostic détaillé de votre maison : isolation, chauffage, ventilation, consommation. 
                Il permet de prioriser les travaux les plus efficaces. 
                Les ménages peuvent bénéficier d’aides financières avec <em>MaPrimeRénov’</em>, 
                variant de 300 à 500 € selon les revenus.
                </p>
            </div>

            <div class="cards">
                <h1>Pourquoi Faire un Audit ?</h1>
                <div class="card">
                <h3>Aide MaPrimeRénov’</h3>
                <p>Recevez jusqu’à 500 € de financement selon votre niveau de revenus.</p>
                </div>
                <div class="card">
                <h3>Plan d’action clair</h3>
                <p>Identifiez les priorités pour réduire votre consommation et cibler les bons travaux.</p>
                </div>
                <div class="card">
                <h3>Valorisation</h3>
                <p>Un logement mieux classé au DPE prend de la valeur sur le marché immobilier.</p>
                </div>
            </div>`};

const ballonThermodynamique = {
  title: `<h1 class="prestation-title">Ballon Thermodynamique</h1>`,
  content: `<div class="intro">
                <h2>Une eau chaude économique et écologique</h2>
                <p>Le ballon thermodynamique utilise les calories de l’air pour chauffer l’eau sanitaire efficacement.</p>
            </div>

            <div class="expertise">
                <p>
                Les équipes <strong>Eco Evolution</strong> installent des ballons thermodynamiques adaptés à vos besoins. 
                Nos installateurs RGE assurent une mise en service optimisée, avec un matériel performant et durable.
                </p>
            </div>

            <div class="description">
                <p>
                Le <strong>ballon thermodynamique</strong> permet de diviser par 3 votre consommation d’électricité pour l’eau chaude sanitaire. 
                Il récupère l’énergie de l’air ambiant ou extérieur pour chauffer l’eau, tout en ouvrant droit à des aides telles que <em>MaPrimeRénov’</em> 
                (jusqu’à 1 200 € selon vos revenus) et les <em>CEE</em>. 
                Un choix écologique et rentable.
                </p>
            </div>

            <div class="cards">
                <h1>Pourquoi Installer un Ballon Thermodynamique ?</h1>
                <div class="card">
                <h3>Aides financières</h3>
                <p>Bénéficiez jusqu’à 1 200 € de subventions cumulables avec les CEE.</p>
                </div>
                <div class="card">
                <h3>Économies d’énergie</h3>
                <p>Réduisez vos factures d’eau chaude de près de 70 %.</p>
                </div>
                <div class="card">
                <h3>Respect de l’environnement</h3>
                <p>Un système utilisant les calories de l’air réduit vos émissions de CO₂.</p>
                </div>
            </div>`};

const pompeAirAir = {
  title: `<h1 class="prestation-title">Pompe à Chaleur Air-Air</h1>`,
  content: `<div class="intro">
                <h2>Chauffez et rafraîchissez en toute simplicité</h2>
                <p>La pompe à chaleur air-air capte l’air extérieur pour chauffer ou climatiser votre logement efficacement.</p>
            </div>

            <div class="expertise">
                <p>
                <strong>Eco Evolution</strong> installe des pompes à chaleur air-air avec un savoir-faire reconnu. 
                Nous vous conseillons pour dimensionner correctement votre installation et garantissons une pose conforme et durable.
                </p>
            </div>

            <div class="description">
                <p>
                La <strong>PAC air-air</strong> est une solution réversible qui chauffe l’hiver et rafraîchit l’été. 
                Bien qu’elle ne soit pas éligible à MaPrimeRénov’, elle permet d’accéder à certaines primes CEE selon le projet. 
                C’est une alternative économique aux convecteurs électriques traditionnels.
                </p>
            </div>

            <div class="cards">
                <h1>Pourquoi Installer une PAC Air-Air ?</h1>
                <div class="card">
                <h3>Polyvalence</h3>
                <p>Un seul système assure chauffage et climatisation selon la saison.</p>
                </div>
                <div class="card">
                <h3>Économies</h3>
                <p>Consommez jusqu’à 3 fois moins d’électricité que des radiateurs classiques.</p>
                </div>
                <div class="card">
                <h3>Confort</h3>
                <p>Bénéficiez d’une température idéale toute l’année, été comme hiver.</p>
                </div>
            </div>`};

const pompeAirEau = {
  title: `<h1 class="prestation-title">Pompe à Chaleur Air-Eau</h1>`,
  content: `<div class="intro">
                <h2>Une solution de chauffage économique et performante</h2>
                <p>La pompe à chaleur air-eau remplace ou complète votre chaudière pour chauffer votre logement et votre eau.</p>
            </div>

            <div class="expertise">
                <p>
                Chez <strong>Eco Evolution</strong>, nous installons des pompes à chaleur air-eau avec une précision technique reconnue. 
                Nos experts RGE garantissent un dimensionnement optimal et un suivi personnalisé pour des performances maximales.
                </p>
            </div>

            <div class="description">
                <p>
                La <strong>PAC air-eau</strong> puise les calories de l’air extérieur pour chauffer votre logement via un circuit d’eau. 
                Elle peut alimenter vos radiateurs ou votre plancher chauffant. 
                Cette solution est éligible à <em>MaPrimeRénov’</em> (jusqu’à 5 000 € selon vos revenus) et aux <em>CEE</em>. 
                Une alternative écologique et économique au fioul ou au gaz.
                </p>
            </div>

            <div class="cards">
                <h1>Pourquoi Installer une PAC Air-Eau ?</h1>
                <div class="card">
                <h3>Aides financières</h3>
                <p>Recevez jusqu’à 5 000 € de MaPrimeRénov’ et cumulez avec les CEE.</p>
                </div>
                <div class="card">
                <h3>Économies d’énergie</h3>
                <p>Divisez vos factures de chauffage par deux ou trois selon votre ancien système.</p>
                </div>
                <div class="card">
                <h3>Confort & écologie</h3>
                <p>Un chauffage homogène et respectueux de l’environnement grâce aux énergies renouvelables.</p>
                </div>
            </div>`};



const prestations = {0:isolation,1:renovationGlobale,2:auditEnergetique,3:calorifugeage,4:ballonThermodynamique,5:pompeAirAir,6:pompeAirEau};
// document.querySelector(".slogan").innerHTML = prestations[5].title;
// document.querySelector(".service-section").innerHTML =prestations[5].content;

let params = new URLSearchParams(document.location.search);
let prestation = params.get("prestation");
if( prestation !=null){
    if(prestations[prestation] != undefined){
        console.log(prestation);
        document.querySelector(".slogan").innerHTML = prestations[prestation].title;
        document.querySelector(".service-section").innerHTML =prestations[prestation].content;
    }else{
        console.log("Pas de clés valide");
    }
}else{
    console.log("Url invalide");
}