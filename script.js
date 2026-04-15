const navClickMenu = document.getElementById('click_menu');
const navClickX = document.getElementById('x__icon');
const mobileMenuContainer = document.querySelector('.nav_mobiles');
const navOpenHeader = document.getElementById('nav_open');

function openMenu(){
    mobileMenuContainer.classList.add('active');
    navOpenHeader.classList.add('active');
}

function closeMenu(){
    mobileMenuContainer.classList.remove('active');
    navOpenHeader.classList.remove('active');
}

navClickMenu.addEventListener('click', openMenu);
navClickX.addEventListener('click', closeMenu);

const helpIcons = document.querySelectorAll('.help');
const allAnswers = document.querySelectorAll('.faq__answer');

helpIcons.forEach((icon, index) => {
    icon.addEventListener('click', function() {
        icon.classList.toggle('active');
        
        allAnswers[index].classList.toggle('active');
    });
});