const toggleBtn = document.querySelector('.navbar_togglebtn');
const icons = document.querySelector('.navbar_icons');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');

});
