document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navi');

    const activateLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    };

    activateLink();
    window.addEventListener('scroll', activateLink);
});

const scroll = document.getElementById('scroll-down')
setTimeout(function(){
    scroll.classList.add("scroll-show");
}, 2500);

const scrollProject = document.getElementById('scroll-down-projects')
setTimeout(function(){
    scrollProject.classList.add("scroll-show");
}, 1000);

const scrollAbout = document.getElementById('scroll-down-about')
setTimeout(function(){
    scrollAbout.classList.add("scroll-show");
}, 1000);