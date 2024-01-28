const heart = document.querySelector('i')

const img = document.querySelector('img')

img.addEventListener("dblclick", function(){
    heart.style.transform = 'scale(1)'
    heart.style.opacity = 0.8

    setTimeout(function(){
        heart.style.opacity = 0
    },1000)

    setTimeout(function(){
        heart.style.transform = 'scale(1)'
    },2000)

})