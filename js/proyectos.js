/* 
proyectos.js
Estructura:
- Constantes
- Funciones
 */

'use strict'

// Selección de las contenedoras que contienen los textos con el nombre de los proyectos
const containerText = document.querySelectorAll('.Container-text')
// Selección de los textos con el nombre de los proyectos
const containerH3 = document.querySelectorAll('.Container-h3')

/* Método de array para recorrer todos los textos y su posición para aplicarles dos funciones*/
containerH3.forEach(function(eachH3,i){
    // Función al hacer mouseover
    containerH3[i].addEventListener('mouseover', function(){
        // El texto que reciba el mouseover añadirá la clase isActive en contenedora e hija y los que no tengan esa posición la eliminarán
        containerText.forEach(function(eachText, i){
            containerText[i].classList.remove('isActive')
            containerH3[i].classList.remove('isActive')
        })
        containerText[i].classList.add('isActive')
        containerH3[i].classList.add('isActive')

    })
    // Función al hacer mouseout
    containerH3[i].addEventListener('mouseout', function(){
        // El texto que reciba el mouseout eliminará la clase isActive
        containerText.forEach(function(eachText, i){
            containerText[i].classList.remove('isActive')
            containerH3[i].classList.remove('isActive')
        })
    })
})

