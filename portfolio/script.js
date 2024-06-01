function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}
const typed = new Typed('.Yo', {
    strings: ['Student','Frontend Developer','Painter'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 400,
    loop: true
});