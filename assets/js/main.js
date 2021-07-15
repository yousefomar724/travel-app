/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu show */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/* Menu Hide */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when click on any nav__link, we remove show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Change Background Header */
function scrollHeader(){
    const header = document.getElementById('header');
    // when the scroll is greater than 100 viewport height background will change
    if(this.scrollY >= 100){
        header.classList.add('scroll-header');
    } else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);

/* Swiper Discover */
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

/* VIDEO */
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon');

function playPause(){
    if(videoFile.paused){
        // play video
        videoFile.play();

        // Icon change
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    }else{
        // pause video
        videoFile.pause();

        // Icon change
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}
videoButton.addEventListener('click', playPause);

function finalVideo(){
    // video ends, icon ends
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// Ended, the video ends
videoFile.addEventListener('ended', finalVideo);

/* Show Scrollup */
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // when the scroll is heigher than 200 viewport height will appear
    if(this.scrollY >= 200) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollup)

/* Scroll Sections Active Link */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
            sectionId = current.getAttribute("id");

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active-link");
            }else{
                document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove("active-link");
            };
    });
};

/* DARK LIGHT THEME */
const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark-theme',
    iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon');

// we obtian the current theme that the interface has by validationg the dark theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously choose a topic
if(selectedTheme){
    //if the validation is fulfilled, we ask what the issue
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
};

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // we save the theme and the current icon that the user chaose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.home__data,
            .home__social-link,
            .home__info,
            .discover__container,
            .experience__data,
            .experience__overlay,
            .place__card,
            .sponsor__content,
            .footer__data,
            .footer__rights`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data,
            .video__description,
            .subscribe__description`, {
    origin: 'left',
})
sr.reveal(`.about__img-overlay,
            .video__content,
            .subscribe__form`, {
    origin: 'right',
    interval: 100,
})