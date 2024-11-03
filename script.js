'use strict'


const container = document.querySelector(`.container`)
const row = document.querySelector(`.row`)
const box = document.querySelectorAll(`.box`)
const btn = document.querySelector(`.btn`)
let gridsize;




const createGrid= function(dimension){

    for(let i=1; i <= dimension;i++){
     let newRow =  document.createElement(`div`)
     newRow.classList.add(`row`)
      for(let n = 1 ; n <= dimension;n++){
        let newBox = document.createElement(`div`)
        newBox.classList.add(`box`)
        newRow.appendChild(newBox)
        newBox.addEventListener(`mouseover`,function(){
            this.style.backgroundColor = `black`
        })
        newBox.addEventListener(`keydown`,function(e){
            console.log(e)
            if (e.target.key = `C`){

                this.style.backgroundColor = `red`
            }
        })

     }
    container.appendChild(newRow)
     

    }
}
btn.addEventListener(`click`,function(){
        
    gridsize = parseInt(prompt(`What are the dimensions you want for this grid ?(1-100 value)`))


    createGrid(gridsize)
})

