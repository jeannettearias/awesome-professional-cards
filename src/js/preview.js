"use strict";

let inputEmail = document.querySelector(".js__inputEmail");
let inputPhone = document.querySelector(".js__inputPhone");
let inputLinkedin = document.querySelector(".js__inputLinkedin");
let inputGithub = document.querySelector(".js__inputGithub");

const linkPhone = document.querySelector(".js__link__phone");
const linkEmail = document.querySelector(".js__link__email");
const linkLinkedin = document.querySelector(".js__link__linkedin");
const linkGithub = document.querySelector(".js__link__github");

const updateTexts = () => {};

const updateLinks = (ev) => {
  ev.preventDefault();
  linkPhone.href = `tel:${inputPhone.value}`;
  linkLinkedin.href = `https://www.${inputLinkedin.value}`;
  linkGithub.href = `http://github.com/${inputGithub.value}`;
  linkEmail.href = `mailto:${inputEmail.value}`;
};
updateLinks();

const updateColors = () => {};

const updatePreview = () => {
  updateTexts();

  updateLinks();

    updateLinks();

    updateColors();

  updateColors();
};
