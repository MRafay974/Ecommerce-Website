const scrollContainer = document.querySelector('.scroll-bar');
const leftBtn = document.querySelector('.fa-arrow-left');
const rightBtn = document.querySelector('.fa-arrow-right');


// Move scroll container to the left
leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy(-100, 0);
});

// Move scroll container to the right
rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy(100, 0);
});





