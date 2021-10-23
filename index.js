// Animacion intro

const introAnimation = () => {

  let tl = gsap.timeline({defaults: {ease: "power1.out"}});

  tl.fromTo(".logo", {opacity: 0}, {opacity: 1, duration: 2})
    .to(".text", { opacity: 0, duration: 1}, "-=0.5")
    .to(".slider", { y: "-100%", duration: 1})
    .to(".intro-content", { y: "-100%", duration: 1}, "-=1")

}

introAnimation();