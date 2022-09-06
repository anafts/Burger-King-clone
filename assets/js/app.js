// Hide nav bar on scroll down and show it on scroll up
const menu = document.querySelector('.menu');
let lastScroll = 0;

document.addEventListener('scroll', function(){
    const scroll = lastScroll - window.scrollY;

    if (window.scrollY === 0) {
        menu.classList.remove('fixed');
    } else {
        if (scroll > 0) {
            menu.classList.add('fixed');
            menu.classList.remove('nav-down');
        } else {
            menu.classList.remove('fixed');
            menu.classList.add('nav-down');
        }
    }

    lastScroll = window.scrollY;
});