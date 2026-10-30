const imagesDiaporama = [
    {
        src: "images/image.png",
        alt: "Rapport de synthèse sur l'intelligence artificielle dans l'enseignement supérieur sénégalais"
    },
    {
        src: "images/Capture d’écran (688).png",
        alt: "Challenge numérique de l'UN-CHK"
    },
    {
        src: "images/Capture d’écran (689).png",
        alt: "Appel à candidatures pour le Master en Legaltech et pratique du droit"
    },
    {
        src: "images/Capture d’écran (690).png",
        alt: "Appel à candidatures pour la formation continue"
    },
    {
        src: "images/Capture d’écran (691).png",
        alt: "Cérémonie de lancement du rapport sur l'intelligence artificielle"
    },
    {
        src: "images/Capture d’écran (692).png",
        alt: "Campagne de sensibilisation Octobre Rose de l'UN-CHK"
    }
];

const imageDiaporama = document.querySelector(".diapositive");
const boutonPrecedent = document.querySelector(".flecheprecedente");
const boutonSuivant = document.querySelector(".flechesuivante");
const diaporama = document.querySelector(".diaporama");

if (imageDiaporama && boutonPrecedent && boutonSuivant && diaporama) {
    let indexImage = 0;
    let minuterie;

    function afficherImage(index) {
        indexImage = (index + imagesDiaporama.length) % imagesDiaporama.length;
        imageDiaporama.src = imagesDiaporama[indexImage].src;
        imageDiaporama.alt = imagesDiaporama[indexImage].alt;
    }

    function demarrerDefilement() {
        window.clearInterval(minuterie);
        minuterie = window.setInterval(() => {
            afficherImage(indexImage + 1);
        }, 5000);
    }

    boutonPrecedent.addEventListener("click", () => {
        afficherImage(indexImage - 1);
        demarrerDefilement();
    });

    boutonSuivant.addEventListener("click", () => {
        afficherImage(indexImage + 1);
        demarrerDefilement();
    });

    diaporama.addEventListener("mouseenter", () => window.clearInterval(minuterie));
    diaporama.addEventListener("mouseleave", demarrerDefilement);
    diaporama.addEventListener("focusin", () => window.clearInterval(minuterie));
    diaporama.addEventListener("focusout", demarrerDefilement);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        demarrerDefilement();
    }
}
