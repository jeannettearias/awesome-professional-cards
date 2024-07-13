"use strict";

let inputEmail = document.querySelector(".js__inputEmail");
let inputPhone = document.querySelector(".js__inputPhone");
let inputLinkedin = document.querySelector(".js__inputLinkedin");
let inputGithub = document.querySelector(".js__inputGithub");

const linkPhone = document.querySelector(".js__link__phone");
const linkEmail = document.querySelector(".js__link__email");
const linkLinkedin = document.querySelector(".js__link__linkedin");
const linkGithub = document.querySelector(".js__link__github");

const updateTexts = () => {

  if (data.name === '') {
    namePreview.innerHTML = 'Nombre Apellidos';
  }
  else {
    namePreview.innerHTML = data.name;
  }


  if (data.job === '') {
    jobPreview.innerHTML = 'Front-end developer';
  }
  else {
    jobPreview.innerHTML = data.job;
  }
};

const updateLinks = () => {
  linkPhone.href = `tel:${data.phone}`;
  linkLinkedin.href = `https://www.linkedin.com/in/${inputLinkedin.value}`;
  linkGithub.href = `http://github.com/${inputGithub.value}`;
  linkEmail.href = `mailto:${inputEmail.value}`;
};
updateLinks();

const updateColors = () => { };

const updatePreview = () => {
  updateTexts();

  updateLinks();

  updateColors();

};
