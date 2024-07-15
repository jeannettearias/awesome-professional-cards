"use strict";

const createCardBtn = document.querySelector(".js__createCardBtn");
const createCardIcon = document.querySelector(".js__createCardIcon");
const iconArrowShare = document.querySelector(".js__icon_arrow_share");
const iconArrowFill = document.querySelector(".js__icon_arrow_fill");
const iconArrowDesign = document.querySelector(".js__icon_arrow_design");
const fieldsetShare = document.querySelector(".js__form_fieldset_share");
const formShareSection = document.querySelector(".js__form-share-section");
const designForm = document.querySelector(".js__design_form");
const formFill = document.querySelector(".js__form_fill");
const createMessage = document.querySelector('.js__createMessage');
const creatCardLink = document.querySelector('.js__creatCardLink');

const handleClickCreate = (ev) => {
    ev.preventDefault();
    console.log("boton clickeado");
    createCardBtn.classList.add("disabled");
    createCardIcon.classList.add("disabled_icon");


    fetch('https://dev.adalab.es/api/card/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'aplication/json'
        }
    })

        .then(response => response.json())
        .then(dataResponse => {

            if (dataResponse.success === false) {
                createMessage.innertHTML =
                    `<P>Ha sucedido un error al crear la tarjeta</P>
             <P>${dataResponse.error}</P>
            `;
            } else if (dataResponse.success === true) {
                creatCardLink.innerHTML = `${dataResponse.cardURL}`;

            }
        })

};

const handleclickDisplay = (ev) => {
    ev.preventDefault();
    console.log("click display");
    const arrow = ev.currentTarget;

    const isActive = arrow.classList.toggle("active");


    if (arrow !== iconArrowShare) {
        iconArrowShare.classList.remove('active');
        formShareSection.classList.add("hidden");
        formShareSection.classList.remove("visible");
    }
    if (arrow !== iconArrowDesign) {
        iconArrowDesign.classList.remove('active');
        designForm.classList.add("hidden");
        designForm.classList.remove("visible");
    }
    if (arrow !== iconArrowFill) {
        iconArrowFill.classList.remove('active');
        formFill.classList.add("hidden");
        formFill.classList.remove("visible");
    }


    if (isActive) {
        if (arrow === iconArrowShare) {
            formShareSection.classList.add('visible');
            formShareSection.classList.remove('hidden');
        } else if (arrow === iconArrowDesign) {
            designForm.classList.add("visible");
            designForm.classList.remove("hidden");
        } else if (arrow === iconArrowFill) {
            formFill.classList.add("visible");
            formFill.classList.remove("hidden");
        }

    }

        else {
            if (arrow === iconArrowShare) {
                formShareSection.classList.add('hidden');
                formShareSection.classList.remove('visible');
            } else if (arrow === iconArrowDesign) {
                designForm.classList.add("hidden");
                designForm.classList.remove("visible");
            } else if (arrow === iconArrowFill) {
                formFill.classList.add("hidden");
                formFill.classList.remove("visible");

            }
        }
   

};



createCardBtn.addEventListener("click", handleClickCreate);
iconArrowShare.addEventListener("click", handleclickDisplay);
iconArrowFill.addEventListener("click", handleclickDisplay);
iconArrowDesign.addEventListener("click", handleclickDisplay);
