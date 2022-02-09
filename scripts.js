const d = document;
const menu = d.querySelector('#menu');
const menu_bar = d.querySelector('#menu_bar');

menu_bar.addEventListener('click', function () {
    
    menu.classList.toggle('menu_toggle');
})