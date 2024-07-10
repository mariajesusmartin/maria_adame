'use strict'

const containerText = document.querySelectorAll('.Container-text')
const containerH3 = document.querySelectorAll('.Container-h3')

containerH3.forEach(function(eachH3,i){
    containerH3[i].addEventListener('mouseover', function(){
        containerText.forEach(function(eachText, i){
            containerText[i].classList.remove('isActive')
            containerH3[i].classList.remove('isActive')
        })
        containerText[i].classList.add('isActive')
        containerH3[i].classList.add('isActive')

    })
    containerH3[i].addEventListener('mouseout', function(){
        containerText.forEach(function(eachText, i){
            containerText[i].classList.remove('isActive')
            containerH3[i].classList.remove('isActive')
        })
    })
})

