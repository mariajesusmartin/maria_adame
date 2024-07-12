/* 
sobremi.js
Estructura:
- Constantes
- Funciones
 */

'use strict'

// Selección de todos los botones que abren las diferentes pestañas de una sección
const buttonOpen = document.querySelectorAll('.Container-button--open')
// Selección de todos los botones que cierran las diferentes pestañas de una sección
const buttonClose = document.querySelectorAll('.Container-button--close')
// Selección de todos los textos que aparecen cuando las pestañas se abren
const containerText = document.querySelectorAll('.Container-text')


/* Método de array para recorre botones y su posición para poder realizar una función */
buttonOpen.forEach (function(eachOpen, i){
    // Función al hacer click 
    buttonOpen[i].addEventListener('click', function(){
        // El botón que reciba el click añadirá la clase isActive
        buttonOpen[i].classList.add('isActive')

        // El texto que reciba el click añadirá la clase isActive y los que no tengan esa posición la eliminarán
        containerText.forEach(function(eachText, i){
            containerText[i].classList.remove('isActive')
            buttonOpen[i].classList.remove('isActive')
        })
        containerText[i].classList.add('isActive')
        buttonOpen[i].classList.add('isActive')
    })
})


/* Método de array para recorre botones y su posición para poder realizar una función */
buttonClose.forEach(function(eachClose, i){
    // Función al hacer click
    buttonClose[i].addEventListener('click', function(){
        buttonOpen.forEach(function(eachOpen, i){
            // El botón que reciba el click eliminará la clase isActive
            buttonOpen[i].classList.remove('isActive')
        })
        containerText.forEach(function(eachText, i){
            // El texto que reciba el click eliminará la clase isActive
            containerText[i].classList.remove('isActive')
        })

    })
})

