// Animacion intro
const introAnimation = () => {

  let tl = gsap.timeline({defaults: {ease: "power1.out"}});

  tl.fromTo(".logo", {opacity: 0}, {opacity: 1, duration: 2})    
    .to(".slider", { y: "-100%", duration: 1})
    .to(".intro-content", { y: "-100%", duration: 1}, "-=1")
}

//Animacion transicion
const homeElementsAnimation = () => {
  let tl = gsap.timeline({default: {ease: "expo"}})

  tl.fromTo('.content', {opacity: 0}, {opacity: 1, duration: 0.1})
}

//Menu desplegable
const menu = () => { 

  const menuBtn = document.querySelector('.menu-btn');
  const navUl = document.querySelector('.nav-links')

  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
    if(!menuOpen){
      menuBtn.classList.add('open');
      navUl.classList.toggle('show');
      menuOpen = true;
    }else{
      menuBtn.classList.remove('open');
      navUl.classList.toggle('show');
      menuOpen = false;
    }
  }
)}

introAnimation();
menu();
homeElementsAnimation();