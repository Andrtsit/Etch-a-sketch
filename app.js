"use strict";
(()=> {

// SELECTING DOM ELEMENTS 

const container = document.querySelector(".container");

const size32Btn = document.getElementById('fixed-size-32');
const size64Btn = document.getElementById('fixed-size-64');
const resetBtn = document.getElementById('reset');
const toggleBordersBtn = document.getElementById('toggle-grid-borders');

const primaryColorInput = document.getElementById('primary-color-option');
const secondaryColorInput = document.getElementById('secondary-color-option')
const sizeInput = document.getElementById('grid-size');
const gridSizeLabel = document.getElementById('grid-label');

// STATES?KINDA 

let gridsize = sizeInput.value; // sizeinput element has a defaultValue of 10;
let primaryColor  = '#000000';
let secondaryColor = "#ffffff";
let isDrawing = false;
let currentButton = null;
let toggleStates = {
  border: true,
  btn32 : false,
  btn64:  false,
}

// FUNCTION FOR CREATING EACH GRID
const createGrid = function(dimension,areBordersToggled){
 container.style.setProperty("--grid-size", dimension);
 container.innerHTML ="";
 sizeInput.value = dimension;
 gridSizeLabel.textContent = `${sizeInput.value} x ${sizeInput.value} Grid`;

 for(let i = 1; i <= dimension * dimension ; i++){
  const cell = document.createElement('div');
  cell.classList.add('box',`${areBordersToggled ? 'border' : "undefinedClass"  }`);
  container.appendChild(cell);
  }
}

// BY DEFAULT THE APP STARTS WITH A 10X10 GRID

createGrid(gridsize,toggleStates.border)




// EVENT LISTENERS FOR DRAWING /MOUSEEVENTS
container.addEventListener("mousedown", function (e) {
  if (e.button === 0 || e.button === 2) {
    isDrawing = true;
    currentButton = e.button;
    e.preventDefault();
    if(e.button === 0){
      e.target.style.backgroundColor = primaryColor;
    }else if(e.button === 2){
      e.target.style.backgroundColor = secondaryColor;

    }
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
      e.target.style.backgroundColor = primaryColor;
    } else if (currentButton === 2) {
      e.target.style.backgroundColor = secondaryColor;
    }
  }
});
// DISABLING RIGHT CLICK POP UP INSIDE THE CONTAINER
container.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

//EVENT LISTENERS FOR BTNS AND INPUTS

size32Btn.addEventListener("click", function(){
  if(toggleStates.btn64) return;
  if(!toggleStates.btn32){
    sizeInput.disabled = true;
    toggleStates.btn32 = !toggleStates.btn32;
    createGrid(32,toggleStates.border)
    this.style.backgroundColor = '#000';
    this.style.color = "#fff";
  }
  else {
    sizeInput.disabled = false;
    toggleStates.btn32 = !toggleStates.btn32;
    createGrid(gridsize,toggleStates.border);
    this.style.backgroundColor = '#fff';
    this.style.color = "#000";
  }
});
size64Btn.addEventListener("click", function(){
 if(toggleStates.btn32) return;
  
 if(!toggleStates.btn64) {
    sizeInput.disabled = true;
    toggleStates.btn64 = !toggleStates.btn64;
    createGrid(64,toggleStates.border)
    this.style.backgroundColor = '#000';
    this.style.color = "#fff";
  }
  else {
    sizeInput.disabled = false;
    toggleStates.btn64 = !toggleStates.btn64;
    createGrid(gridsize,toggleStates.border);
    this.style.backgroundColor = '#fff';
    this.style.color = "#000";
  }
});



toggleBordersBtn.addEventListener("click",function(){
 if(!toggleStates.border) {
   toggleStates.border = !toggleStates.border;
   const boxes = document.querySelectorAll(".box");
   boxes.forEach((box)=> {
     box.classList.toggle('border')
   })
   this.style.backgroundColor = '#fff';
   this.style.color = "#000";
   this.innerHTML = 'Turn Off Grid Lines';
  }
  else {
    toggleStates.border = !toggleStates.border;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=> {
      box.classList.toggle('border')
    })
  this.style.backgroundColor = '#000';
   this.style.color = "#fff"
   this.innerHTML = 'Turn On Grid Lines';
  }
});



primaryColorInput.addEventListener("change", function(e) {
  primaryColor = e.target.value; 
});



secondaryColorInput.addEventListener("change",function(e){
  secondaryColor = e.target.value;
});


sizeInput.addEventListener("change",function(){


gridsize = Number(sizeInput.value);
gridSizeLabel.textContent = `${gridsize} x ${gridsize} Grid`;
createGrid(gridsize,toggleStates.border);
})


resetBtn.addEventListener('click',function(){
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box=> box.style.backgroundColor = '#fff')
});


})();