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

const handleClickCreate = (ev) => {
    ev.preventDefault();
    console.log("boton clickeado");
    createCardBtn.classList.add("disabled");
    createCardIcon.classList.add("disabled_icon");
};

const handleclickDisplay = (ev) => {
    ev.preventDefault();
    console.log("click display");
    const arrow = ev.currentTarget;
    arrow.classList.toggle("active");

    if (arrow === iconArrowShare) {
        formShareSection.classList.toggle("visible");
    } else if (arrow === iconArrowFill) {
        formFill.classList.toggle("visible");
    } else if (arrow === iconArrowDesign) {
        designForm.classList.toggle("visible");
    }
};

createCardBtn.addEventListener("click", handleClickCreate);
iconArrowShare.addEventListener("click", handleclickDisplay);
iconArrowFill.addEventListener("click", handleclickDisplay);
iconArrowDesign.addEventListener("click", handleclickDisplay);
