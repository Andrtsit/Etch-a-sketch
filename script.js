"use strict";

const app = function () {
  const container = document.querySelector(`.container`);
  const btn = document.querySelector(`.btn`);
  const btnBorder = document.getElementById(`border-btn`);
  const thirthyTwo = document.getElementById(`fix-size-1`);
  const sixtyFour = document.getElementById(`fix-size-2`);

  const createGrid = function (dimension) {
    document.documentElement.style.setProperty("--grid-size", dimension);

    for (let i = 1; i <= dimension; i++) {
      let newRow = document.createElement(`div`);
      newRow.classList.add(`row`);
      for (let n = 1; n <= dimension; n++) {
        let newBox = document.createElement(`div`);
        newBox.classList.add(`box`);
        newBox.classList.add(`border`);
        newRow.appendChild(newBox);
        newBox.addEventListener(`mouseover`, function () {
          this.style.backgroundColor = `black`;
          console.log(document.querySelectorAll(`.box`));
        });
      }
      container.appendChild(newRow);
    }
  };
  createGrid(10);

  btn.addEventListener(`click`, function () {
    let gridsize = parseInt(
      prompt(`What are the dimensions you want for this grid ?(1-100 value)`)
    );

    document.querySelectorAll(`.box`).forEach((box) => box.remove());

    if (gridsize > 0 && gridsize <= 100) createGrid(gridsize);
    else alert(`not a valid number`);
  });
  btnBorder.addEventListener(`click`, function () {
    document
      .querySelectorAll(`.box`)
      .forEach((box) => box.classList.toggle(`border`));
  });

  sixtyFour.addEventListener(`click`, function () {
    document.querySelectorAll(`.box`).forEach((box) => box.remove());
    createGrid(64);
  });
  thirthyTwo.addEventListener(`click`, function () {
    document.querySelectorAll(`.box`).forEach((box) => box.remove());
    createGrid(32);
  });
};

app();
