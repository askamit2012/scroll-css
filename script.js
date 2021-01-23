const pages = document.querySelectorAll('section');

const arrow = document.querySelector('.downArrow');
const sec2 = document.querySelector('#sec2');

console.log(sec1);

arrow.addEventListener('click', () => {
    sec2.scrollIntoView();
})

