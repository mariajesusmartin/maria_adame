'use strict'


const aboutImg = document.querySelector('.About-li--close')

aboutImg.addEventListener('mouseover', function(){
    aboutImg.style.opacity = `0`
})
aboutImg.addEventListener('mouseout' , function(){
    aboutImg.style.opacity = `1`
})




let posicionWeb = 0
let posicionGraphic = 0

const proyectsWeb = document.querySelector('.Proyect-ul--web')
const proyectsGraphic = document.querySelector('.Proyect-ul--graphic')

const desplazarWeb = ()=>{

    posicionWeb++
    if(posicionWeb > 1){
        posicionWeb = 0
    }
    proyectsWeb.style.transform = `translateX(${posicionWeb*(100/2)}%)`
}

const desplazarGraphic = ()=>{
    posicionGraphic++
    if(posicionGraphic > 1){
        posicionGraphic = 0
    }
    proyectsGraphic.style.transform = `translateX(${posicionGraphic*(100/2)}%)`
}

let automaticoWeb
let automaticoGraphic

automaticoWeb = setInterval(desplazarWeb, 2000)
automaticoGraphic = setInterval(desplazarGraphic, 2000)




