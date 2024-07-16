"use strict";

let inputEmail = document.querySelector(".js__inputEmail");
let inputPhone = document.querySelector(".js__inputPhone");
let inputLinkedin = document.querySelector(".js__inputLinkedin");
let inputGithub = document.querySelector(".js__inputGithub");
const inputImage = document.querySelector('.js__profile-image');
const previewImage = document.querySelector('.js__profile-preview');

const linkPhone = document.querySelector(".js__link__phone");
const linkEmail = document.querySelector(".js__link__email");
const linkLinkedin = document.querySelector(".js__link__linkedin");
const linkGithub = document.querySelector(".js__link__github");


const updateTexts = () => {
  if (data.name === "") {
    namePreview.innerHTML = "Nombre Apellidos";
  } else {
    namePreview.innerHTML = data.name;
  }

  if (data.job === "") {
    jobPreview.innerHTML = "Front-end developer";
  } else {
    jobPreview.innerHTML = data.job;
  }
};

const updateLinks = () => {
  linkPhone.href = `tel:${data.phone}`;
  linkLinkedin.href = `https://www.linkedin.com/in/${data.linkedin}`;
  linkGithub.href = `http://github.com/${data.github}`;
  linkEmail.href = `mailto:${data.email}`;
};

const updateColors = () => {
  refreshPalletsStyles();
};

//Reset image 
const updateImage = () => {
  if (data.photo === '') {
    previewImage.setAttribute('style', '');
    inputImage.setAttribute('style', '');
  } else if (data.photo.trim() > 0) { //remove the blank space to the string
    previewImage.setAttribute('style', data.photo);
    inputImage.setAttribute('style', data.photo);
  }
}

const updatePreview = () => {
  updateTexts();

  updateLinks();

  updateColors();

  updateImage();
};

