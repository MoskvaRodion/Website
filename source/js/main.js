window.addEventListener("load", (event) => {

    const BURGER = document.querySelector('.js-burger');
    const HEADER_MENU = document.querySelector('.js-header-menu');
   
    BURGER.addEventListener('click', (e) => {
           e.preventDefault();
           BURGER.classList.toggle('active');
           HEADER_MENU.classList.toggle('isOpen');
   
    });
   
   });