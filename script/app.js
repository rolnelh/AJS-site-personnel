const person = document.querySelector(".person");
const titleSpans = document.querySelectorAll('.left h1 span');
const btn = document.querySelector('.btn');

window.addEventListener('load', () => {
    
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(person, 2, {x: -130,duration: '2',ease: "power1.out", opacity:1}, 0.3)
    .staggerFrom(titleSpans, 2, {x: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btn, 1, {x: -50, opacity: 0, ease: "power2.out"}, 0.4, '-=1')


    TL.play();
} )

var hamburger = document.querySelector('.hamburger');
var ul = document.querySelector('ul');

hamburger.addEventListener("click", () =>  {
    hamburger.classList.toggle('active');
    ul.classList.toggle('open');
})

function isVisible(element){
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight ) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth )
    );
}

function Decompte(){
    var experienceElement = document.getElementById('experience');

    var compteur = 0 ;

    function increment() {
        if (compteur < 20 ) {
            compteur ++;
            experienceElement.textContent = compteur;
            setTimeout(increment, 100);
        }
    }

    increment();
}

window.addEventListener('scroll', function() {
    var aboutSection = this.document.getElementById('about');
    if(isVisible(aboutSection)) {
        Decompte();
    }
});



window.onload = function() {
    increment();
};



