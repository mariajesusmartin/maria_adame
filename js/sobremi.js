'use strict'


const buttonOpen = document.querySelectorAll('.Container-button--open')
const buttonClose = document.querySelectorAll('.Container-button--close')
const containerText = document.querySelectorAll('.Container-text')

buttonOpen.forEach (function(eachOpen, i){
    buttonOpen[i].addEventListener('click', function(){
        buttonOpen[i].classList.add('isActive')

        containerText.forEach(function(eachText, i){
            containerText[i].classList.remove('isActive')
            buttonOpen[i].classList.remove('isActive')
        })
        containerText[i].classList.add('isActive')
        buttonOpen[i].classList.add('isActive')
    })
})



buttonClose.forEach(function(eachClose, i){
    buttonClose[i].addEventListener('click', function(){
        buttonOpen.forEach(function(eachOpen, i){
            buttonOpen[i].classList.remove('isActive')
        })
        containerText.forEach(function(eachText, i){
            containerText[i].classList.remove('isActive')
        })

    })
})

