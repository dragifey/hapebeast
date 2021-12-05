/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 2000) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// function scrollHeaderDark(){
//     const header2 = document.getElementById('header')
//     if(this.scrollY >= 4300) header2.classList.remove('scroll-header');
// }
// window.addEventListener('scroll', scrollHeaderDark)

function scrollHeaderDark(){
    const header2 = document.getElementById('header')
    if(this.scrollY >= 4400) header2.classList.add('scroll-header-dark'); else header2.classList.remove('scroll-header-dark')
}
window.addEventListener('scroll', scrollHeaderDark)

/*==================== SHOW VIDEO ====================*/

const button = document.querySelector('.button__colored')

const videoContainer = document.querySelector('.video__container');

const close = document.querySelector('.close');

button.addEventListener('click', ()=>{
    videoContainer.classList.add('show');
})

close.addEventListener('click', ()=>{
    videoContainer.classList.remove('show');
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== QUESTIONS ====================*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*==================== SCROLLREVEAL ====================*/
const sR = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})


sR.reveal(`.footer__content`, {interval: 100}, {delay: 150}, {origin: 'bottom'})

sR.reveal(`.home__data`, {origin: 'left'}, {delay: 500})
sR.reveal(`.questions__group, .team__member, .team__members`, {interval: 100})
sR.reveal(`.about__data, .footer__copy`, {origin: 'bottom'})

sR.reveal(`.roadmap__text-data, .team__section`, {origin: 'bottom'}, {delay: 200})
sR.reveal(`.roadmap_data`, {origin: 'bottom'}, {delay: 200})
sR.reveal(`.roadmap__rounder, .roadmap__line`, {delay: 150}, {interval: 250}, {origin: 'top'})