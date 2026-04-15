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

const helpIcon = document.querySelector('.help');

helpIcon.addEventListener('click', function() {
    this.classList.toggle('active');
});