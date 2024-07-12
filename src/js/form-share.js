"use strict";

const createCardBtn = document.querySelector('.js__createCardBtn');
const createCardIcon = document.querySelector('.js__createCardIcon');

const handleClickCreate = (ev) => {
    ev.preventDefault();
    console.log('boton clickeado');
    createCardBtn.classList.add('disabled');
    createCardIcon.classList.add('disabled_icon');

}

createCardBtn.addEventListener('click', handleClickCreate);