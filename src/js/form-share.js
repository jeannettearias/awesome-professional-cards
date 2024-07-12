"use strict";

const createCardBtn = document.querySelector('.js__createCardBtn');

const handleClickCreate = (ev) => {
    ev.preventDefault();
    console.log('boton clickeado');
    createCardBtn.classList.add('disabled');

}

createCardBtn.addEventListener('click', handleClickCreate);