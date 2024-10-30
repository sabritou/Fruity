let currentSlide = 1;

function changeSlide() {
    const body = document.body;
    const title = document.getElementById("title");
    const slideImage = document.getElementById("slideImage");
    const slideImage2 = document.getElementById("slideImage2");
    const slide = document.getElementById("slide");

    slide.classList.add("slide-out-right");

    setTimeout(() => {
        body.classList.remove("Cherry", "Exotic", "Apple");

        if (currentSlide === 1) {
            body.classList.add("Exotic"); 
            title.textContent = "Exotic";
            slideImage.src = "img/1.png"; 
            slideImage.alt = "Exotic";
            slideImage2.src = "img/blackberri.png"; 
            currentSlide = 2;
        } else if (currentSlide === 2) {
            body.classList.add("Apple");
            title.textContent = "Apple";
            slideImage.src = "img/3.png"; 
            slideImage.alt = "Apple";
            slideImage2.src = "img/apple.png"; 
            currentSlide = 3;
        } else {
            body.classList.add("Cherry");
            title.textContent = "Cherry";
            slideImage.src = "img/2.png"; 
            slideImage.alt = "Cherry";
            slideImage2.src = "img/fraise.png";
            currentSlide = 1;
        }

        slide.classList.remove("slide-out-right");
        slide.classList.add("slide-in-right");

        setTimeout(() => {
            slide.classList.remove("slide-in-right");
        }, 800);

    }, 800);
}
