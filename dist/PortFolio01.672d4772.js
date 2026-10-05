// --- NEW JS FOR EDUCATION SECTION TOGGLE ---
const readMoreBtn = document.getElementById('read-more-btn');
const closeEducationBtn = document.getElementById('close-education-btn');
const aboutSection = document.getElementById('about');
const educationSection = document.getElementById('education-section');
// Function to show the Education section
readMoreBtn.onclick = (e)=>{
    e.preventDefault();
    aboutSection.style.display = 'none'; // Hide About section
    educationSection.classList.add('active'); // Show Education section (via CSS display: flex)
    // Smoothly scroll to the newly visible education section
    window.scrollTo({
        top: educationSection.offsetTop,
        behavior: 'smooth'
    });
};
// Function to hide the Education section and go back to About
closeEducationBtn.onclick = (e)=>{
    e.preventDefault();
    educationSection.classList.remove('active'); // Hide Education section
    aboutSection.style.display = 'flex'; // Show About section
    // Smoothly scroll back to the about section
    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
    });
};
// --- END NEW JS ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = ()=>{
    sections.forEach((sec)=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) navLinks.forEach((links)=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
ScrollReveal({
    //reset: true,
    distance: '88px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right'
});
const typed = new Typed('.multiple-text', {
    strings: [
        'Full Stack Developer',
        'Java Developer',
        'Excel specialist'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//# sourceMappingURL=PortFolio01.672d4772.js.map
