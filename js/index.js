'use strict'


const aboutImg = document.querySelector('.About-li--close')

aboutImg.addEventListener('mouseover', function(){
    aboutImg.style.opacity = `1`
})
aboutImg.addEventListener('mouseout' , function(){
    aboutImg.style.opacity = `0`
})



let posicionWeb = 1
let posicionGraphic = 1

const proyectsWeb = document.querySelector('.Proyect-ul--web')
const proyectsGraphic = document.querySelector('.Proyect-ul--graphic')

const desplazarWeb = ()=>{

    posicionWeb--
    if(posicionWeb < 0){
        posicionWeb = 1
    }
    proyectsWeb.style.transform = `translateX(${posicionWeb*(100/2)}%)`
}


const desplazarGraphic = ()=>{
    posicionGraphic--
    if(posicionGraphic < 0){
        posicionGraphic = 1
    }
    proyectsGraphic.style.transform = `translateX(${posicionGraphic*(100/2)}%)`
}


let automaticoWeb
let automaticoGraphic

automaticoWeb = setInterval(desplazarWeb, 2000)
automaticoGraphic = setInterval(desplazarGraphic, 2000)





