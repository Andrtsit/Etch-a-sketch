"use strict";
(()=> {
// SELECTING DOM ELEMENTS 
const container = document.querySelector(".container");
const customSizeBtn = document.getElementById("custom-size-btn")
const size32Btn = document.getElementById('fixed-size-32');
const size64Btn = document.getElementById('fixed-size-64');
const toggleBtn = document.getElementById('toggle');
const colorInput = document.getElementById('color-option');

// STATES?KINDA 

let currentColor  = 'black';
let isDrawing = false;
let currentButton = null;

// FUNCTION FOR CREATING EACH GRID

const createGrid = function(dimension){

 container.style.setProperty("--grid-size", dimension);
 container.innerHTML ="";

 for(let i = 1; i <= dimension * dimension ; i++){
  const cell = document.createElement('div');
  cell.classList.add('box',"border");
  container.appendChild(cell);
} 

}

// BY DEFAULT THE APP STARTS WITH A 10X10 GRID
createGrid(10)


// EVENT LISTENERS FOR DRAWING /MOUSEEVENTS
container.addEventListener("mousedown", function (e) {
  if (e.button === 0 || e.button === 2) {
    isDrawing = true;
    currentButton = e.button;
    e.preventDefault();
  }
});

container.addEventListener("mouseup", function () {
  isDrawing = false;
  currentButton = null;
});

container.addEventListener("mouseleave", function () {
  isDrawing = false;
  currentButton = null;
});

container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("box") && isDrawing) {
    if (currentButton === 0) {
      e.target.style.backgroundColor = currentColor;
    } else if (currentButton === 2) {
      e.target.style.backgroundColor = "#fff"; // BY DEFAULT ACTS LIKE AN ERASER , MAYBE I WILL ADD A SELECTION FOR THE RIGHT CLICK AS WELL 
    }
  }
});
// DISABLING RIGHT CLICK POP UP INSIDE THE CONTAINER
container.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// LISTENERS FOR THE BUTTONS /OPTIONS

customSizeBtn.addEventListener("click", function () {
 let gridsize = parseInt(
 prompt("Choose the dimensions of the grid (this is a 10x10 by default , enter a number between 1-100"));

 if(gridsize > 0 && gridsize <= 100)createGrid(gridsize);
 else {
  alert("Not a valid number")
  createGrid(10)
}
});

size32Btn.addEventListener("click", function(){
  createGrid(32)
});

size64Btn.addEventListener("click", function(){
  createGrid(64)
});     
toggleBtn.addEventListener("click",function(){
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box)=> {
  box.classList.toggle('border')
  })
})

colorInput.addEventListener("change", function(e) {
  currentColor = e.target.value; 
}
)
})();