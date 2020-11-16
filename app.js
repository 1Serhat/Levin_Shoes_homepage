// mobile navbar
const hamburger = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.main-menu');
const aLink = document.querySelectorAll('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('isActive');
    mainMenu.classList.toggle('activeNav');
})
// close navbar after cliked the link
aLink.forEach((aLink) =>{
    aLink.addEventListener('click', ()=> {
        hamburger.classList.toggle('activeNav');
    mainMenu.classList.toggle('activeNav');
    })
})

// fix scroll
const navFixed = document.querySelector('nav');
window.addEventListener('scroll', () =>{
    if (window.pageYOffset > 100){
        navFixed.classList.add('fixedNav');
    } else {
        navFixed.classList.remove('fixedNav');
    }
})


// to Top button

const toTop = document.querySelector('.toTop');

window.addEventListener('scroll', ()=> {
    if (window.pageYOffset > 100){
        toTop.classList.add('scrollActive');
    } else {
        toTop.classList.remove('scrollActive');
    }
})





