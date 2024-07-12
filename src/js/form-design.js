"use strict";

const inputPalettes1 = document.querySelector(".js__inputPalette1");
const inputPalettes2 = document.querySelector(".js__inputPalette2");
const inputPalettes3 = document.querySelector(".js__inputPalette3");
const linePalette = document.querySelector(".js__linePalette");
const namePalette = document.querySelector(".js__namePalette");
const bordersPalette = document.querySelectorAll(".js__borderPalette");

function refreshPalletsStyles() {
  console.log(`Estyo refrescando a paleta ${data.palette}`);

  //------NAME

  namePalette.classList.remove(
    "color_palette1",
    "color_palette2",
    "color_palette3"
  );
  namePalette.classList.add(`color_palette${data.palette}`);

  //------LINE

  linePalette.classList.remove(
    "line_color_palette1",
    "line_color_palette2",
    "line_color_palette3"
  );
  linePalette.classList.add(`line_color_palette${data.palette}`);

  //------BORDER & ICON

  for (const item of bordersPalette) {
    item.classList.remove(
      "border_color_palette1",
      "border_color_palette2",
      "border_color_palette3",
      "color_palette1",
      "color_palette2",
      "color_palette3"
    );
    item.classList.add(`border_color_palette${data.palette}`);
    item.classList.add(`color_palette${data.palette}`);
  }
}
//EVENTOS

function inputPaletteAction(ev) {
  ev.preventDefault();
  data.palette = ev.currentTarget.value;
  refreshPalletsStyles();
}

inputPalettes1.addEventListener("change", inputPaletteAction);
inputPalettes2.addEventListener("change", inputPaletteAction);
inputPalettes3.addEventListener("change", inputPaletteAction);
