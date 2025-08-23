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
  backgroundImage: "url('./images/renovation.jpg')",
  content: `
    <div class="intro">
        <h1>Améliorez durablement votre habitat</h1>
        <p>La rénovation globale est la solution idéale pour optimiser la performance énergétique de votre logement tout en bénéficiant des aides financières les plus avantageuses.</p>
    </div>

    <div class="expertise">
        <h1>Notre Expertise</h1>
        <p>
        Chez <strong>Eco Evolution</strong>, nous vous accompagnons de A à Z dans votre projet de rénovation globale. 
        Nos experts certifiés RGE basés à Nancy et dans toute la Lorraine assurent des travaux de qualité, 
        conformes aux normes en vigueur et pensés pour maximiser vos économies d’énergie.
        </p>
    </div>

    <div class="description">
        <h1>La Rénovation Globale c'est quoi ?</h1>
        <p>
        La <strong>rénovation globale</strong> consiste à regrouper plusieurs actions de rénovation énergétique 
        en un seul projet cohérent : isolation thermique, chauffage performant, ventilation… 
        Cette approche permet d’obtenir des gains énergétiques importants et d’accéder 
        aux aides les plus élevées comme <em>MaPrimeRénov’ Sérénité</em> et les <em>Certificats d’Économies d’Énergie (CEE)</em>. 
        Résultat : un logement plus confortable, plus économe et valorisé sur le marché immobilier.
        </p>
    </div>

    <h1 class="title-cards">Pourquoi Rénover ?</h1>
    <div class="second second-card">
        
        <div class="card red" data-aos="fade-right" data-aos-duration="1000">
            <div class="title-card">
                <h1>Aides financières renforcées</h1>
                <hr>
                <span class="legend">Profitez d’un cumul d’aides nationales et locales pour financer vos travaux</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Avec <span>MaPrimeRénov’ Sérénité</span>, les <span>CEE</span> et certaines aides <span>locales en Lorraine</span>, vos travaux peuvent être <span>subventionnés jusqu’à 50 %</span>. 
                C’est l’opportunité idéale pour réduire fortement votre <span>reste à charge</span> et engager des travaux complets sans compromis.</p>
            </div>
            <a class="button button-first" href="contact.html">Demander une estimation</a>
        </div>

        <div class="card yellow" data-aos="zoom-in-up" data-aos-duration="1000">
            <div class="title-card">
                <h1>Économies d’énergie durables</h1>
                <hr>
                <span class="legend">Des travaux qui réduisent vos factures dès la première année</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Une <span>maison rénovée globalement</span> peut diviser par deux ses <span>dépenses de chauffage</span>. 
                Cela signifie plus de <span>pouvoir d’achat</span>, une <span>maîtrise</span> de vos consommations et une <span>résilience</span> face à l’augmentation des prix de l’énergie.</p>
            </div>
            <a class="button" href="contact.html">Découvrir les économies</a>
        </div>

        <div class="card yellow" data-aos="fade-left" data-aos-duration="1000">
            <div class="title-card">
                <h1>Confort et valorisation</h1>
                <hr>
                <span class="legend">Un logement agréable et mieux coté sur le marché immobilier</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Grâce à une <span>isolation renforcée</span> et un <span>système de chauffage performant</span>, votre habitat garde une <span>température stable</span> toute l’année. 
                De plus, une rénovation globale augmente la <span>valeur patrimoniale</span> de votre bien et améliore son <span>étiquette énergétique</span>.</p>
            </div>
            <a class="button" href="contact.html">Améliorer mon confort</a>
        </div>
    </div>
    <div class="intro">
        <h1>En Conclusion</h1>
        <p>En optant pour la <span>rénovation globale</span>, vous réduisez vos <span>factures d’énergie</span>, valorisez votre <span>patrimoine immobilier</span> et contribuez à la <span>réduction de votre empreinte carbone</span>. Un investissement durable et largement <span>financé</span> pour un habitat plus <span>économe</span> et plus <span>confortable</span>.</p>
    </div>`
};
const auditEnergetique = {
  title: `<h1 class="prestation-title" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Audit Énergétique RGE</h1>`,
  backgroundImage:"url('./images/rge.jpg')",
  content: `<div class="intro">
                <h1>Évaluez précisément la performance de votre logement</h1>
                <p>L’audit énergétique RGE permet de connaître les faiblesses de votre maison et de définir un plan de rénovation efficace, tout en profitant d’aides financières spécifiques.</p>
            </div>

            <div class="expertise">
                <h1>Notre Expertise</h1>
                <p>
                Avec <strong>Eco Evolution</strong>, vous bénéficiez d’un audit réalisé par des professionnels certifiés RGE en Lorraine. 
                Notre équipe vous accompagne pas à pas, avec des conseils clairs et un rapport complet qui vous guide vers les meilleures solutions pour <span>économiser l’énergie</span> et <span>valoriser votre patrimoine</span>.
                </p>
            </div>

            <div class="description">
                <h1>Qu'est ce qu'un Audit Énergetique ?</h1>

                <p>
                L’<strong>audit énergétique RGE</strong> est une analyse approfondie de la performance de votre habitation : 
                isolation, chauffage, ventilation, consommation globale. 
                Il propose différents scénarios de rénovation chiffrés et hiérarchisés, en mettant en avant les gains énergétiques possibles et les aides mobilisables ( <em>MaPrimeRénov’</em>, <em>CEE</em> ). 
                Cet audit est souvent <span>obligatoire pour obtenir certaines subventions</span>, en particulier dans le cadre d’une rénovation globale.
                </p>
            </div>
            <h1 class="title-cards">Pourquoi réaliser un audit énergétique ?</h1>
            <div class="second second-card">
                
                <div class="card red" data-aos="fade-right" data-aos-duration="1000">
                    <div class="title-card">
                        <h1>Aides accessibles avec l’audit</h1>
                        <hr>
                        <span class="legend">Un prérequis pour bénéficier de certaines subventions importantes</span>
                        <hr>
                    </div>
                    <div class="card-description">
                        <p>L’<span>audit énergétique RGE</span> est indispensable pour débloquer certaines <span>aides nationales</span> comme <span>MaPrimeRénov’ Sérénité</span>. 
                        Il vous ouvre également l’accès aux <span>CEE</span> et peut réduire fortement le coût de vos futurs travaux.</p>
                    </div>
                    <a class="button button-first" href="contact.html">Vérifier mes aides</a>
                </div>

                <div class="card yellow" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div class="title-card">
                        <h1>Un plan clair et chiffré</h1>
                        <hr>
                        <span class="legend">Des scénarios précis pour guider vos décisions</span>
                        <hr>
                    </div>
                    <div class="card-description">
                        <p>Chaque audit fournit <span>plusieurs solutions de rénovation</span> avec <span>chiffrage détaillé</span>. 
                        Vous pouvez comparer les <span>économies attendues</span>, choisir un parcours de rénovation adapté à votre budget et avancer avec une vision claire.</p>
                    </div>
                    <a class="button" href="contact.html">Découvrir un exemple d’audit</a>
                </div>

                <div class="card yellow" data-aos="fade-left" data-aos-duration="1000">
                    <div class="title-card">
                        <h1>Valorisation de votre bien</h1>
                        <hr>
                        <span class="legend">Un atout pour la revente ou la location</span>
                        <hr>
                    </div>
                    <div class="card-description">
                        <p>En réalisant un audit, vous mettez en lumière les <span>points forts et faibles</span> de votre logement. 
                        Un rapport clair et un projet de rénovation global valorisent votre <span>étiquette énergétique</span> et augmentent la <span>valeur patrimoniale</span> de votre bien.</p>
                    </div>
                    <a class="button" href="contact.html">Améliorer la valeur de mon logement</a>
                </div>
            </div>
            <div class="intro">
                <h1>En Conclusion</h1>
                <p>À la clé : <span>économies d’énergie</span>, <span>confort thermique</span> accru, <span>valorisation</span> de votre bien et <span>réduction de l’empreinte carbone</span>. Bénéficiez des <span>aides</span> comme <span>MaPrimeRénov’</span> (jusqu’à <span>500 €</span> selon vos <span>revenus</span>) pour financer votre audit, et passez à l’action avec un <span>rapport détaillé</span> et un <span>accompagnement</span> pas à pas par <span>Eco Evolution</span>.</p>
            </div>`
};



const isolation = {
  title: `<h1 class="prestation-title" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Isolation Intérieure & Extérieure</h1>`,
  backgroundImage: "url('./images/isolation-2.jpg')",
  content: `
    <div class="intro">
        <h1>Une maison bien isolée, des économies assurées</h1>
        <p>L’isolation thermique est la solution idéale pour limiter les pertes de chaleur, améliorer le confort et réduire durablement vos factures énergétiques.</p>
    </div>

    <div class="expertise">
        <h1>Notre Expertise</h1>
        <p>
        Avec <strong>Eco Evolution</strong>, vos travaux d’isolation sont réalisés par des professionnels certifiés RGE. 
        Nous sélectionnons des matériaux performants et durables, adaptés à chaque type de bâtiment en Lorraine et dans le Grand Est. 
        Nos équipes garantissent une pose soignée pour des résultats mesurables et immédiats, tout en respectant les normes en vigueur.
        </p>
    </div>

    <div class="description">
        <h1>Quel impact sur votre logement ?</h1>
        <p>
        L’isolation par l’intérieur permet de réduire rapidement vos dépenses de chauffage, tandis que l’isolation par l’extérieur traite efficacement les ponts thermiques et valorise la façade de votre logement. 
        Ces solutions optimisent la performance énergétique de vos murs et ouvrent droit aux aides financières telles que <em>MaPrimeRénov’</em> et les <em>Certificats d’Économies d’Énergie (CEE)</em>. 
        Vous bénéficiez ainsi d’un habitat plus confortable, économique et respectueux de l’environnement.
        </p>
    </div>

    <h1 class="title-cards">Pourquoi Isoler ?</h1>
    <div class="second second-card">

        <div class="card red" data-aos="fade-right" data-aos-duration="1000">
            <div class="title-card">
                <h1>Aides financières accessibles</h1>
                <hr>
                <span class="legend">Profitez d’un soutien financier pour alléger le coût de vos travaux</span>
                <hr>
            </div>
            <div class="card-description">
                <p>En réalisant vos travaux d’isolation avec <span>Eco Evolution</span>, vous pouvez mobiliser <span>MaPrimeRénov’</span>, les <span>CEE</span> et certaines aides locales en Lorraine. 
                Ces subventions peuvent couvrir une part significative de vos investissements, réduisant ainsi votre <span>reste à charge</span> tout en vous permettant d’opter pour des matériaux de haute qualité.</p>
            </div>
            <a class="button button-first" href="contact.html">Vérifier mes aides</a>
        </div>

        <div class="card yellow" data-aos="zoom-in-up" data-aos-duration="1000">
            <div class="title-card">
                <h1>Économies d’énergie immédiates</h1>
                <hr>
                <span class="legend">Réduisez vos factures dès la première année</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Une isolation efficace permet de diminuer jusqu’à <span>30 % vos dépenses de chauffage</span> dès la première année. 
                Vous profitez d’une maîtrise durable de votre consommation énergétique, d’une meilleure régulation thermique et d’un impact positif sur vos <span>factures</span> et sur l’environnement.</p>
            </div>
            <a class="button" href="contact.html">Découvrir les économies</a>
        </div>

        <div class="card yellow" data-aos="fade-left" data-aos-duration="1000">
            <div class="title-card">
                <h1>Confort et bien-être améliorés</h1>
                <hr>
                <span class="legend">Un habitat agréable toute l’année, hiver comme été</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Avec une isolation renforcée, vos murs restent chauds en hiver et frais en été. 
                L’humidité et les sensations de paroi froide disparaissent, votre maison devient plus confortable et agréable à vivre. 
                Cette amélioration thermique contribue également à la valorisation de votre bien sur le marché immobilier.</p>
            </div>
            <a class="button" href="contact.html">Améliorer mon confort</a>
        </div>
    </div>
        <div class="intro">
        <h1>En Conclusion</h1>
        <p>Avec une <span>isolation performante</span>, vous bénéficiez d’un <span>confort durable</span>, réduisez vos <span>factures de chauffage</span>, valorisez votre <span>patrimoine immobilier</span> et contribuez à la <span>réduction de votre empreinte carbone</span>. Un choix à la fois économique, écologique et durable.</p>
        </div>`
};


const calorifugeage = {
  title: `<h1 class="prestation-title" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Calorifugeage</h1>`,
  backgroundImage: "url('./images/calorifugeage.jpg')",
  content: `
    <div class="intro">
        <h1>Protégez vos canalisations et économisez</h1>
        <p>Le calorifugeage limite les pertes de chaleur de vos réseaux de tuyauterie, améliore l’efficacité énergétique de votre installation et réduit vos factures.</p>
    </div>

    <div class="expertise">
        <h1>Notre Expertise</h1>
        <p>
        Les spécialistes <strong>Eco Evolution</strong> réalisent le calorifugeage dans les règles de l’art. 
        Certifiés RGE, nous intervenons sur des installations individuelles ou collectives en Lorraine et dans le Grand Est, 
        en garantissant une pose conforme aux normes environnementales et aux bonnes pratiques pour un résultat durable et performant.
        </p>
    </div>

    <div class="description">        
        <h1>Qu'est ce que le Calorifugeage ?</h1>

        <p>
        Le <strong>calorifugeage</strong> consiste à entourer les canalisations d’eau chaude, les conduits ou les réservoirs d’un isolant adapté. 
        Cette technique réduit les pertes d’énergie jusqu’à 20 %, optimise la distribution de chaleur et permet de réaliser des économies substantielles sur vos charges. 
        Elle est particulièrement efficace dans les immeubles collectifs où les réseaux sont longs et complexes. 
        De plus, ces travaux sont éligibles aux <em>Certificats d’Économies d’Énergie (CEE)</em>.
        </p>
    </div>

    <h1 class="title-cards">Pourquoi Calorifuger ?</h1>
    <div class="second second-card">

        <div class="card red" data-aos="fade-right" data-aos-duration="1000">
            <div class="title-card">
                <h1>Aides financières disponibles</h1>
                <hr>
                <span class="legend">Profitez d’un financement jusqu’à 100 % grâce aux CEE</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Le <span>calorifugeage</span> peut être pris en charge totalement ou partiellement via les <span>Certificats d’Économies d’Énergie</span>, 
                vous permettant de réaliser ces travaux sans impact sur votre budget. <span>Eco Evolution</span> vous accompagne dans le montage des dossiers pour maximiser vos aides.</p>
            </div>
            <a class="button button-first" href="contact.html">Vérifier mes aides</a>
        </div>

        <div class="card yellow" data-aos="zoom-in-up" data-aos-duration="1000">
            <div class="title-card">
                <h1>Économies d’énergie immédiates</h1>
                <hr>
                <span class="legend">Réduisez vos pertes de chaleur et vos charges rapidement</span>
                <hr>
            </div>
            <div class="card-description">
                <p>En isolant efficacement vos canalisations, vous diminuez jusqu’à <span>20 % vos pertes de chaleur</span> et optimisez la distribution de l’énergie. 
                Cela se traduit par des <span>économies immédiates</span> sur vos factures et une meilleure performance de votre installation sur le long terme.</p>
            </div>
            <a class="button" href="contact.html">Découvrir les économies</a>
        </div>

        <div class="card yellow" data-aos="fade-left" data-aos-duration="1000">
            <div class="title-card">
                <h1>Durabilité et entretien simplifié</h1>
                <hr>
                <span class="legend">Une installation protégée qui dure dans le temps</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Le calorifugeage protège vos canalisations contre les variations de température et l’usure, ce qui réduit les risques de corrosion et de maintenance. 
                Une installation isolée est plus durable et nécessite moins d’entretien, assurant un confort durable et des performances optimales pour votre habitat ou copropriété.</p>
            </div>
            <a class="button" href="contact.html">Assurer la durabilité</a>
        </div>
    </div>
    <div class="intro">
        <h1>En Conclusion</h1>
        <p>En choisissant le <span>calorifugeage</span>, vous optimisez votre <span>confort thermique</span>, prolongez la <span>durée de vie</span> de vos équipements et contribuez à la <span>réduction de votre consommation énergétique</span>. Une solution simple, efficace et largement <span>rentable</span>.</p>
    </div>`
};


const ballonThermodynamique = {
  title: `<h1 class="prestation-title" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Ballon Thermo<span> dynamique</span></h1>`,
  backgroundImage: "url('./images/energie.jpg')",
  content: `
    <div class="intro">
        <h1>Une eau chaude économique et écologique</h1>
        <p>Le ballon thermodynamique utilise les calories de l’air pour chauffer l’eau sanitaire de manière efficace et durable, tout en réduisant vos consommations électriques.</p>
    </div>

    <div class="expertise">
        <h1>Notre Expertise</h1>
        <p>
        Les équipes <strong>Eco Evolution</strong> installent des ballons thermodynamiques adaptés à votre habitation. 
        Nos installateurs certifiés RGE assurent une mise en service optimisée avec un matériel performant et durable, 
        vous garantissant une production d’eau chaude fiable et un confort quotidien amélioré.
        </p>
    </div>

    <div class="description">
        <h1>Comment fonctionne un ballon thermodynamique ?</h1>
        <p>
        Le <strong>ballon thermodynamique</strong> capte l’énergie de l’air ambiant ou extérieur via une pompe à chaleur intégrée pour chauffer votre eau sanitaire. 
        Il permet de diviser par trois votre consommation électrique par rapport à un chauffe-eau classique. 
        Cette solution écologique ouvre droit à des aides financières telles que <em>MaPrimeRénov’</em> (jusqu’à 1 200 € selon vos revenus) et les <em>Certificats d’Économies d’Énergie (CEE)</em>. 
        Allier économies, confort et respect de l’environnement devient simple et rentable.
        </p>
    </div>

    <h1 class="title-cards">Pourquoi Installer un Ballon Thermodynamique ?</h1>
    <div class="second second-card">

        <div class="card red" data-aos="fade-right" data-aos-duration="1000">
            <div class="title-card">
                <h1>Aides financières avantageuses</h1>
                <hr>
                <span class="legend">Bénéficiez de subventions pour réduire le coût d’installation</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Grâce aux <span>aides MaPrimeRénov’</span> et aux <span>CEE</span>, l’installation de votre <span>ballon thermodynamique</span> peut être largement financée. 
                <span>Eco Evolution</span> vous accompagne dans le montage des dossiers et la gestion des subventions, afin de maximiser vos économies dès le départ.</p>
            </div>
            <a class="button button-first" href="contact.html">Vérifier mes aides</a>
        </div>

        <div class="card green" data-aos="zoom-in-up" data-aos-duration="1000">
            <div class="title-card">
                <h1>Installation rapide et simple</h1>
                <hr>
                <span class="legend">Un ballon thermodynamique installé sans tracas</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Le <span>ballon thermodynamique</span> s’intègre facilement à votre <span>logement</span>, même existant, et son installation est rapide. 
                Une mise en service optimisée par nos experts RGE assure un fonctionnement immédiat et fiable, avec un entretien minimal pour un confort durable.</p>
            </div>
            <a class="button" href="contact.html">En savoir plus</a>
        </div>

        <div class="card green" data-aos="fade-left" data-aos-duration="1000">
            <div class="title-card">
                <h1>Économies et écologie</h1>
                <hr>
                <span class="legend">Réduisez votre consommation d’électricité et votre empreinte carbone</span>
                <hr>
            </div>
            <div class="card-description">
                <p>En utilisant l’énergie de l’air pour chauffer l’eau, votre <span>ballon thermodynamique</span> réduit fortement vos <span>factures d’électricité</span> tout en limitant votre impact environnemental. 
                Cette solution permet de concilier <span>économies financières</span> et <span>transition énergétique</span> de manière concrète et durable.</p>
            </div>
            <a class="button" href="contact.html">Profiter des économies</a>
        </div>
    </div>
    <div class="intro">
        <h1>En Conclusion</h1>
        <p>Durable et à <span>faible entretien</span>, le <span>ballon thermodynamique</span> assure un <span>confort optimal</span> tout en diminuant vos <span>factures</span> et votre <span>empreinte carbone</span>. Une solution <span>économique</span>, <span>écologique</span> et adaptée aux <span>propriétaires</span> souhaitant un système d’<span>eau chaude</span> moderne et respectueux de l’environnement.</p>
    </div>`
};


const pompeAirAir = {
  title: `<h1 class="prestation-title" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Pompe à Chaleur Air-Air</h1>`,
  backgroundImage: "url('./images/airair.jpg')",
  content: `
    <div class="intro">
        <h1>Chauffez et rafraîchissez en toute simplicité</h1>
        <p>La pompe à chaleur air-air capte l’air extérieur pour chauffer ou climatiser votre logement de manière efficace et économique, tout en améliorant votre confort toute l’année.</p>
    </div>

    <div class="expertise">        
        <h1>Notre Expertise</h1>
        <p>
        <strong>Eco Evolution</strong> installe des pompes à chaleur air-air avec un savoir-faire reconnu. 
        Nos experts RGE vous conseillent sur le dimensionnement optimal de votre installation et garantissent une pose conforme aux normes, durable et performante. 
        Chaque installation est réalisée pour maximiser les économies et le confort de votre habitat.
        </p>
    </div>

    <div class="description">
        <h1>Comment fonctionne une Pompe À Chaleur (PAC) Air Air ?</h1>
        <p>
        La <strong>PAC air-air</strong> est une solution réversible qui chauffe l’hiver et rafraîchit l’été. 
        Bien qu’elle ne soit pas éligible à <em>MaPrimeRénov’</em>, elle peut bénéficier de certaines primes <em>CEE</em> selon votre projet. 
        Elle constitue une alternative économique aux convecteurs électriques traditionnels, en réduisant significativement vos consommations et en offrant un confort thermique optimal.
        </p>
    </div>

    <h1 class="title-cards">Pourquoi Installer une PAC Air-Air ?</h1>
    <div class="second second-card">

        <div class="card red" data-aos="fade-right" data-aos-duration="1000">
            <div class="title-card">
                <h1>Polyvalence saisonnière</h1>
                <hr>
                <span class="legend">Une seule installation pour chauffage et climatisation</span>
                <hr>
            </div>
            <div class="card-description">
                <p>La <span>PAC air-air</span> est réversible et s’adapte à toutes les saisons. 
                Elle chauffe votre logement en hiver et le rafraîchit en été, offrant un <span>confort constant</span> sans avoir besoin de plusieurs équipements distincts.</p>
            </div>
            <a class="button button-first" href="contact.html">Améliorer mon confort</a>
        </div>

        <div class="card yellow" data-aos="zoom-in-up" data-aos-duration="1000">
            <div class="title-card">
                <h1>Économies d’énergie</h1>
                <hr>
                <span class="legend">Consommez jusqu’à 3 fois moins qu’avec des radiateurs électriques</span>
                <hr>
            </div>
            <div class="card-description">
                <p>Grâce à l’utilisation de l’air comme source d’énergie, la <span>PAC air-air</span> réduit significativement votre consommation d’électricité par rapport aux systèmes classiques. 
                Vous réalisez <span>des économies immédiates</span> tout en profitant d’une installation performante et durable.</p>
            </div>
            <a class="button" href="contact.html">Découvrir les économies</a>
        </div>

        <div class="card yellow" data-aos="fade-left" data-aos-duration="1000">
            <div class="title-card">
                <h1>Confort toute l’année</h1>
                <hr>
                <span class="legend">Température idéale été comme hiver</span>
                <hr>
            </div>
            <div class="card-description">
                <p>La <span>PAC air-air</span> garantit un confort thermique optimal, en maintenant une température agréable dans toutes les pièces de votre logement. 
                Profitez d’un climat intérieur équilibré, hiver comme été, tout en réduisant votre empreinte énergétique.</p>
            </div>
            <a class="button" href="contact.html">Profiter du confort</a>
        </div>
    </div>
    <div class="intro">
        <h1>En Conclusion</h1>
        <p>Choisir une <span>PAC air-air</span>, c’est profiter d’une <span>installation simple</span>, d’un <span>rendement énergétique élevé</span> et d’une <span>longévité</span> pouvant aller jusqu’à 20 ans. Vous divisez vos <span>dépenses énergétiques</span> par trois et réalisez jusqu’à <span>1 000 € d’économies par an</span>, tout en réduisant votre <span>empreinte carbone</span>. Un investissement <span>rentable</span> et respectueux de l’environnement.</p>
    </div>`
};


const pompeAirEau = {
  title: `<h1 class="prestation-title" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Pompe à Chaleur Air-Eau</h1>`,
  backgroundImage: "url('./images/aireau.jpg')",
  content: `
    <div class="intro">
        <h1>Une solution de chauffage économique et performante</h1>
        <p>La pompe à chaleur air-eau remplace ou complète votre chaudière pour chauffer votre logement et votre eau sanitaire tout en réduisant vos consommations énergétiques.</p>
    </div>

    <div class="expertise">
        <h1>Notre Expertise</h1>
        <p>
        Chez <strong>Eco Evolution</strong>, nous installons des pompes à chaleur air-eau avec une expertise technique reconnue. 
        Nos installateurs certifiés RGE garantissent un dimensionnement précis et un suivi personnalisé pour des performances maximales, 
        tout en assurant un confort optimal dans votre habitation.
        </p>
    </div>

    <div class="description">        
        <h1>Comment fonctionne une Pompe À Chaleur (PAC) Air Eau ?</h1>
        <p>
        La <strong>PAC air-eau</strong> puise les calories de l’air extérieur pour chauffer votre logement via un circuit d’eau. 
        Elle alimente vos radiateurs ou votre plancher chauffant de manière efficace et écologique. 
        Cette solution est éligible à <em>MaPrimeRénov’</em> (jusqu’à 5 000 € selon vos revenus) et aux <em>Certificats d’Économies d’Énergie (CEE)</em>, 
        offrant ainsi une alternative économique et respectueuse de l’environnement par rapport au fioul ou au gaz.
        </p>
    </div>

    <h1 class="title-cards">Pourquoi Installer une PAC Air-Eau ?</h1>
    <div class="second second-card">

        <div class="card red" data-aos="fade-right" data-aos-duration="1000">
            <div class="title-card">
                <h1>Aides financières attractives</h1>
                <hr>
                <span class="legend">Jusqu’à 5 000 € avec MaPrimeRénov’ et cumulable avec les CEE</span>
                <hr>
            </div>
            <div class="card-description">
                <p>La <span>PAC air-eau</span> bénéficie de subventions importantes telles que <span>MaPrimeRénov’</span> et les <span>CEE</span>. 
                <span>Eco Evolution</span> vous accompagne dans le montage des dossiers et la récupération des aides pour maximiser vos économies sur l’installation.</p>
            </div>
            <a class="button button-first" href="contact.html">Vérifier mes aides</a>
        </div>

        <div class="card yellow" data-aos="zoom-in-up" data-aos-duration="1000">
            <div class="title-card">
                <h1>Économies d’énergie significatives</h1>
                <hr>
                <span class="legend">Réduisez vos factures de chauffage jusqu’à 2 ou 3 fois</span>
                <hr>
            </div>
            <div class="card-description">
                <p>En exploitant les calories de l’air extérieur, la <span>PAC air-eau</span> permet de diminuer considérablement vos dépenses énergétiques. 
                Selon votre ancien système de chauffage, vous pouvez diviser vos factures de <span>chauffage par deux ou trois</span> dès la première saison.</p>
            </div>
            <a class="button" href="contact.html">Découvrir les économies</a>
        </div>

        <div class="card yellow" data-aos="fade-left" data-aos-duration="1000">
            <div class="title-card">
                <h1>Confort & respect de l’environnement</h1>
                <hr>
                <span class="legend">Un chauffage homogène et écologique toute l’année</span>
                <hr>
            </div>
            <div class="card-description">
                <p>La <span>PAC air-eau</span> assure un chauffage homogène et agréable dans toutes les pièces de votre logement. 
                Elle utilise les énergies renouvelables pour réduire l’empreinte carbone de votre habitation tout en garantissant un confort thermique optimal.</p>
            </div>
            <a class="button" href="contact.html">Profiter du confort</a>
        </div>
    </div>
    <div class="intro">
        <h1>En Conclusion</h1>
        <p>La <span>PAC air-eau</span> assure un <span>chauffage constant et homogène</span>, améliore votre <span>confort thermique</span> et divise vos <span>factures d’énergie</span> par quatre. Durable, polyvalente et <span>écologique</span>, elle est la solution idéale pour un habitat plus <span>économique</span> et respectueux de l’<span>environnement</span>.</p>

    </div>
    `};



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
        
        document.querySelector(".hole").style.backgroundImage = prestations[prestation].backgroundImage;

        // document.body.style.backgroundImage = "url('img_tree.png')";
    }else{
        console.log("Pas de clés valide");
    }
}else{
    console.log("Url invalide");
}