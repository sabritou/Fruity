let currentSlide = 1;

function changeSlide() {
    const body = document.body;
    const title = document.getElementById("title");
    const slideImage = document.getElementById("slideImage");
    const slideImage2 = document.getElementById("slideImage2");
    const slide = document.getElementById("slide");

    slide.classList.add("slide-out-right");

    setTimeout(() => {
        // Retirer les classes de couleur de fond existantes
        body.classList.remove("Cherry", "Exotic", "Apple");

        // Changer la couleur de fond, le texte, et les images en fonction de la slide actuelle
        if (currentSlide === 1) {
            body.classList.add("Exotic"); 
            title.textContent = "Exotic";
            slideImage.src = "img/1.png"; // Image pour Slide 2
            slideImage.alt = "Exotic";
            slideImage2.src = "img/blackberri.png"; // Image de superposition pour Slide 2
            currentSlide = 2;
        } else if (currentSlide === 2) {
            body.classList.add("Apple");
            title.textContent = "Apple";
            slideImage.src = "img/3.png"; // Image pour Slide 3
            slideImage.alt = "Apple";
            slideImage2.src = "img/apple.png"; // Image de superposition pour Slide 3
            currentSlide = 3;
        } else {
            body.classList.add("Cherry");
            title.textContent = "Cherry";
            slideImage.src = "img/2.png"; // Revenir à l'image de la Slide 1
            slideImage.alt = "Cherry";
            slideImage2.src = "img/fraise.png"; // Image de superposition pour Slide 1
            currentSlide = 1;
        }

        slide.classList.remove("slide-out-right");
        slide.classList.add("slide-in-right");

        // Enlever la classe slide-in-right après la transition pour permettre le prochain cycle
        setTimeout(() => {
            slide.classList.remove("slide-in-right");
        }, 800);

    }, 800);
}
