"use strict";

const inputPalettes1 = document.querySelector(".js__inputPalette1");
const inputPalettes2 = document.querySelector(".js__inputPalette2");
const inputPalettes3 = document.querySelector(".js__inputPalette3");

function refreshPalletsStyles() {
  console.log(`Estyo refrescando a paleta ${data.pallete}`);
}

function inputPaletteAction(ev) {
  ev.preventDefault();
  data.pallete = ev.currentTarget.value;
  refreshPalletsStyles();
}

inputPalettes1.addEventListener("change", inputPaletteAction);
inputPalettes2.addEventListener("change", inputPaletteAction);
inputPalettes3.addEventListener("change", inputPaletteAction);
