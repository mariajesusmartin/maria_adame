/* 
index.js
Estructura:
- Constantes
- Variables
- Funciones
- Reasignaciones
 */

'use strict'

// Selección de imagen
const aboutImg = document.querySelector('.About-li--close')
// Selección de bloque proyectos Diseño Web
const proyectsWeb = document.querySelector('.Proyect-ul--web')
// Selección de bloque proyectos Diseño Gráfico
const proyectsGraphic = document.querySelector('.Proyect-ul--graphic')

// Variable para establecer una posición
let posicionWeb = 1
let posicionGraphic = 1
// Variables para crear una función setInterval()
let automaticoWeb
let automaticoGraphic


/* Funciones para crear transición entre dos imágenes*/
// Función para poner la imagen con opacidad 1 al hacer mouseover
aboutImg.addEventListener('mouseover', function(){
    aboutImg.style.opacity = `1`
})
// Función para poner la imagen con opacidad 0 al hacer mouseout
aboutImg.addEventListener('mouseout' , function(){
    aboutImg.style.opacity = `0`
})

/* Funciones para hacer un carrousel a través de su posición y aplicándole un translate a una contendora */
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

/* Funciones setInterval, para hacer que al ejecutar las funciones de arriba, se cree un bucle*/
automaticoWeb = setInterval(desplazarWeb, 2000)
automaticoGraphic = setInterval(desplazarGraphic, 2000)





