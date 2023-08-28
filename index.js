document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".scroll-bar");
    const leftArrow = document.querySelector(".fa-arrow-left");
    const rightArrow = document.querySelector(".fa-arrow-right");
    const boxWidth = 350; // Adjust this to the actual width of your boxes
    let numBoxes = 7;

    let position = 0;

    rightArrow.addEventListener("click", () => {
        position -= boxWidth;
        if (position < -(boxWidth * numBoxes)) {
            position = 0;
        }
        sliderContainer.style.transform = `translateX(${position}px)`;
    });

    leftArrow.addEventListener("click", () => {
        position += boxWidth;
        if (position > 0) {
            position = -(boxWidth * numBoxes);
        }
        sliderContainer.style.transform = `translateX(${position}px)`;
    });

    menuOverlay = document.querySelector(".menu-overlay");
    hamBurger = document.querySelector(".hamburger");

    hamBurger.addEventListener("click", () => {
        menuOverlay.style.display="block";
    });

    menuOverlay.addEventListener("click", () => {
        menuOverlay.style.display="none";
    });
});
